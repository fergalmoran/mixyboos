import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    DATABASE_URL: z.string().url(),
    STREAM_HOST: z.string().url(),
    LIVE_HOST: z.string().url(),
    NODE_ENV: z.enum(["development", "test", "production"]),
    NEXTAUTH_SECRET:
      process.env.NODE_ENV === "production"
        ? z.string().min(1)
        : z.string().min(1).optional(),
    NEXTAUTH_URL: z.string().url(),
    JWT_SECRET: z.string(),
    // Add `.min(1) on ID and SECRET if you want to make sure they're not empty
    GOOGLE_CLIENT_ID: z.string(),
    GOOGLE_CLIENT_SECRET: z.string(),

    PUSHER_APPID: z.string(),
    PUSHER_KEY: z.string(),
    PUSHER_SECRET: z.string(),

    AZURE_ACCOUNT_NAME: z.string(),
    AZURE_ACCOUNT_KEY: z.string(),
    AZURE_ACCOUNT_URL: z.string(),
  },
  client: {
    NEXT_PUBLIC_PUSHER_KEY: z.string().min(1),
  },

  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
    LIVE_HOST: process.env.LIVE_HOST,
    STREAM_HOST: process.env.STREAM_HOST,
    NODE_ENV: process.env.NODE_ENV,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    JWT_SECRET: process.env.JWT_SECRET,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,

    AZURE_ACCOUNT_NAME: process.env.AZURE_ACCOUNT_NAME,
    AZURE_ACCOUNT_KEY: process.env.AZURE_ACCOUNT_KEY,
    AZURE_ACCOUNT_URL: process.env.AZURE_ACCOUNT_URL,

    NEXT_PUBLIC_PUSHER_KEY: process.env.NEXT_PUBLIC_PUSHER_KEY,
    PUSHER_APPID: process.env.PUSHER_APPID,
    PUSHER_KEY: process.env.PUSHER_KEY,
    PUSHER_SECRET: process.env.PUSHER_SECRET,
  },
});
