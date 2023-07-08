/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.mjs");

/* 公開時のサブディレクトリ */
const SUB_DIRECTORY = process.env.NEXT_PUBLIC_SUB_DIRECTORY;

/* 本番環境と開発環境の分岐用のフラグ */
const isProd = process.env.NODE_ENV == "production";

/** @type {import("next").NextConfig} */
const config = {
  // アプリケーションの潜在的な問題を明らかにするための開発専用の機能
  reactStrictMode: true,
  // 本番環境では SUB_DIRECTORY それ以外は空欄
  basePath: isProd ? SUB_DIRECTORY : "",
  // 本番環境では SUB_DIRECTORY それ以外は空欄
  assetPrefix: isProd ? SUB_DIRECTORY : "",
  // 画像やリンクのパスを設定
  publicRuntimeConfig: {
    basePath: isProd ? SUB_DIRECTORY : "",
  }
};
export default config;
