import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  /**
   * サーバー用環境変数.
   */
  server: {
    NODE_ENV: z.enum(["development", "test", "production"]),
  },

  /**
   * クライアント用環境変数.
   *
   * 先頭に `NEXT_PUBLIC_` をつける
   */
  client: {
    NEXT_PUBLIC_TEXT_ALIVE_API_TOKEN: z.string().min(1),
    NEXT_PUBLIC_SUB_DIRECTORY: z.string().min(0),
  },

  /**
   * Next.js エッジ ランタイム (ミドルウェアなど)
   * またはクライアント側で通常のオブジェクトとして
   * `process.env` を破棄することはできないため、手動で破棄する必要があります.
   */
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_TEXT_ALIVE_API_TOKEN: process.env.NEXT_PUBLIC_TEXT_ALIVE_API_TOKEN,
    NEXT_PUBLIC_SUB_DIRECTORY: process.env.NEXT_PUBLIC_SUB_DIRECTORY,
  },
});
