import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "background-dark": "rgb(11, 13, 23)",
        "text-light-blue": "rgb(208, 214, 249)",
        "text-white": "rgb(255, 255, 255)",
      },
      fontFamily: {
        bellefair: [`var(--font-bellefair)`],
        barlow: [`var(--font-barlow-condensed)`],
        barlowCondensed: [`var(--font-barlow-condensed)`],
      },
    },
  },
  plugins: [],
};
export default config;
