/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

export default {
  // 'class' strategy: dark: variants are only generated when .dark is on <html>
  // This prevents Tailwind from emitting dark: variants eagerly on every class.
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        "outfit": "var(--font-outfit)",
      },
    },
  },
  plugins: [addBrandVariables, flowbite.plugin()],
};

/**
 * Only expose the 3 brand CSS custom properties actually used in this project.
 * The previous addVariablesForColors generated ~500 variables for EVERY Tailwind
 * color, adding ~15-20 KiB of unused CSS to every page.
 */
function addBrandVariables({ addBase }) {
  addBase({
    ":root": {
      "--brand-primary": "#173366",
      "--brand-accent":  "#FFC65C",
      "--brand-light":   "#EBF2FE",
    },
  });
}
