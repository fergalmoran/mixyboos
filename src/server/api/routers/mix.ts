import * as trpc from "@trpc/server";
import { mixes, users } from "@/db/schema";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";
import { slugifyWithCounter } from "@sindresorhus/slugify";
const slugify = slugifyWithCounter();

import { eq, sql, and } from "drizzle-orm";
import { db } from "@/server/db";
import { desc } from "drizzle-orm";
import * as z from "zod";
import { mapMixToMixModel } from "@/lib/utils/mappers/mixMapper";

export const mixRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    const results = db
      .select()
      .from(mixes)
      .orderBy(desc(mixes.createdAt))
      .limit(10);

    return results;
  }),
  getByUserAndSlug: publicProcedure
    .input(
      z.object({
        username: z.string(),
        mixSlug: z.string(),
      })
    )
    .query(async ({ input: { username: username, mixSlug }, ctx }) => {
      //don't like this but it appears we can't query on foreign key columns
      //in drizzle

      const user = await db.query.users.findFirst({
        where: (users, { eq }) => eq(users.username, username),
      });
      if (!user) {
        throw new trpc.TRPCError({
          code: "NOT_FOUND",
          message: "Invalid user.",
        });
      }
      const mix = await db.query.mixes.findFirst({
        where: (mixes, { eq }) =>
          and(eq(mixes.slug, mixSlug), eq(mixes.userId, user.id)),
        with: {
          user: {},
        },
      });
      if (!mix) {
        throw new trpc.TRPCError({
          code: "NOT_FOUND",
          message: "Invalid mix.",
        });
      }
      return mapMixToMixModel(mix);
    }),
  createMix: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        title: z.string(),
        description: z.string(),
        tags: z.array(z.string()).optional(),
      })
    )
    .mutation(async ({ input: { id, title, description, tags }, ctx }) => {
      const userResult = await db
        .selectDistinct()
        .from(users)
        .where(eq(users.id, ctx.session.id));
      const user = userResult[0];
      if (!user) {
        throw new trpc.TRPCError({
          code: "FORBIDDEN",
          message: "User is not authenticated.",
        });
      }
      let slug;
      let checkSlugResult;
      do {
        slug = slugify(title, { decamelize: false, separator: "-" });
        checkSlugResult = await db
          .select({ count: sql<number>`count(*)`.mapWith(Number) })
          .from(mixes)
          .where(eq(mixes.slug, slug));
      } while (checkSlugResult[0]?.count !== 0);

      const result = await db
        .insert(mixes)
        .values({ id, title, slug, description, userId: ctx.session.id })
        .returning();
      if (result && result[0]) {
        return mapMixToMixModel({
          user: user,
          ...result[0],
        });
      }
      throw new trpc.TRPCError({
        message: "Unable to save mix",
        code: "INTERNAL_SERVER_ERROR",
      });
    }),
});
