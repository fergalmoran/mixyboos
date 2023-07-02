import { users } from "@/db/schema";
import { env } from "@/env.mjs";
import { eq } from "drizzle-orm";
import { mapDbAuthUserToUserModel } from "@/lib/utils/mappers/userMapper";
import { db } from "@/server/db";
import { verify } from "argon2";
import { type GetServerSidePropsContext } from "next";
import {
  getServerSession,
  type NextAuthOptions,
  type Session,
  type User,
} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { DrizzleAdapter } from "./adapters/drizzleAdapter";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  callbacks: {
    session: ({ session, token }) => {
      return {
        id: token.id,
        user: token.user,
      } as Session;
    },
    jwt: async ({ token }) => {
      if (!token.email) {
        return token;
      }
      const qry = await db
        .select()
        .from(users)
        .where(eq(users.email, token.email))
        .limit(1);
      const user = qry[0];
      if (user) {
        return {
          id: token.sub,
          user: mapDbAuthUserToUserModel(user),
        };
      }
      return token;
    },
  },
  adapter: DrizzleAdapter(db),
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "email@domain.com",
        },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        try {
          if (!credentials?.email || !credentials?.password) {
            return null;
          }
          const qry = await db
            .select()
            .from(users)
            .where(eq(users.email, credentials.email))
            .limit(1);
          const user = qry[0];

          if (!user || !user.password) {
            return null;
          }

          const isValidPassword = await verify(
            user.password,
            credentials.password
          );

          if (!isValidPassword) {
            return null;
          }

          return {
            id: user.id,
            name: user.name,
            bio: user.bio,
            email: user.email,
            username: user.username,
            profileImage: user.profileImage,
            headerImage: user.headerImage,
          } as User;
        } catch (e) {
          return null;
        }
      },
    }),
  ],
  jwt: {
    secret: env.NEXTAUTH_SECRET,
    maxAge: 15 * 24 * 30 * 60, // 15 days
  },
  pages: {
    signIn: "/auth/login",
    signOut: "/auth/login",
    error: "/auth/error", // Error code passed in query string as ?error=
    verifyRequest: "/auth/verify-request", // (used for check email message)
    newUser: "/auth/register",
  },
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext["req"];
  res: GetServerSidePropsContext["res"];
}) => {
  return getServerSession(ctx.req, ctx.res, authOptions);
};
