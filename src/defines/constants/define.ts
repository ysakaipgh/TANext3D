import { type CSSProperties } from "react";
import { env } from "~/env.mjs";

// トークンは https://developer.textalive.jp/profile で取得したものを使う
export const myToken: string = env.NEXT_PUBLIC_TEXT_ALIVE_API_TOKEN;

// Element.style で上書きされるので、Canvasに直接サイズ指定しないといけない（Tailwindでの指定が上書きされる）
export const canvasStyle: CSSProperties = {
  width: `${100}vw`,
  height: `${100}vh`,
  position: "fixed",
  top: 0,
  left: 0,
};
