import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "show-lyrics": "show-lyrics 0.1s",
        "hide-lyrics": "hide-lyrics 0.1s",
      },
      keyframes: {
        "show-lyrics": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        "hide-lyrics": {
          "0%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
          },
        },
      },
    },
  },
  variants: {
    extend: {
      // ボタン等のDisabled属性
      opacity: ["disabled"],
      cursor: ["disabled"],
    },
  },
  plugins: [],
} satisfies Config;
