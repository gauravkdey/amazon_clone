import { orange } from "tailwindcss/colors";
import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(19, 25, 33)",
        secondary: orange[300],
      },
    },
  },
  plugins: [],
} satisfies Config;
