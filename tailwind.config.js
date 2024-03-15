const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    screens: {
      sm: "320px",
      "2sm": "481px",
      "3sm": "641px",
      md: "961px",
      lg: "1025px",
      xl: "1281px",
    },
    extend: {
      colors: {
        gold: "#D6B981",
        white: "#fff",
        darkslateblue: "#004791",
        gainsboro: "#e6e6e6",
        steelblue: {
          100: "#1b79ad",
          200: "#266eb8",
        },
        dimgray: "#6c6c6c",
        black: "#000",
        darkgray: "#969696",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "system-ui", "serif"],
        default: ["var(--font-inter)", "system-ui", "sans-serif"],
        "romantic-lovely": [
          "var(--font-romantic-lovely)",
          "system-ui",
          "serif",
        ],
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
        noelan: ["var(--font-noelan)", "system-ui", "serif"],
        peristiwa: ["var(--font-peristiwa)", "system-ui", "sans-serif"],
        montserrat: "Montserrat",
        inter: "Inter",
        "kaisei-decol": "'Kaisei Decol'",
        jomolhari: ["var(--font-jomolhari)", "system-ui", "serif"],
      },
      borderRadius: {
        lg: "18px",
      },
      fontSize: {
        xs: "0.75rem",
        base: "1rem",
        "49xl": "4.25rem",
        "22xl": "2.563rem",
        "35xl": "3.375rem",
        sm: "0.875rem",
        smi: "0.813rem",
        inherit: "inherit",
      },
      screens: {
        mq750: {
          raw: "screen and (max-width: 750px)",
        },
        mq675: {
          raw: "screen and (max-width: 675px)",
        },
        mq450: {
          raw: "screen and (max-width: 450px)",
        },
      },
      animation: {
        // Fade up and down
        "fade-up": "fade-up 0.5s",
        "fade-down": "fade-down 0.5s",
        // Tooltip
        "slide-up-fade": "slide-up-fade 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-down-fade": "slide-down-fade 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        // Fade up and down
        "fade-up": {
          "0%": {
            opacity: 0,
            transform: "translateY(10px)",
          },
          "80%": {
            opacity: 0.6,
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0px)",
          },
        },
        "fade-down": {
          "0%": {
            opacity: 0,
            transform: "translateY(-10px)",
          },
          "80%": {
            opacity: 0.6,
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0px)",
          },
        },
        // Tooltip
        "slide-up-fade": {
          "0%": { opacity: 0, transform: "translateY(6px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "slide-down-fade": {
          "0%": { opacity: 0, transform: "translateY(-6px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        "hero-pattern": "url('/img/hero-pattern.svg')",
        "footer-texture": "url('/bg-blue-footer.png')",
      },
      rotate: {
        270: "270deg",
      },
    },
  },
  plugins: [
    addVariablesForColors,
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    plugin(({ addVariant }) => {
      addVariant("radix-side-top", '&[data-side="top"]');
      addVariant("radix-side-bottom", '&[data-side="bottom"]');
    }),
  ],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  );

  addBase({
    ":root": newVars,
  });
}
