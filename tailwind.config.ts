import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '576px',
        'md': '768px',
        'lg': '992px',
        'xl': '1280px', //nhỏ hơn 1280px là sang màn lg
        '2xl': '1280px',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#00ADEF",
        bg1: "#292929",
        bg2: "#212121",
        bg3: "#1C1C1C",
      },
    },
  },
  plugins: [],
} satisfies Config;
