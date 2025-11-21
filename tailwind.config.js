import { root } from 'postcss';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        tertiary: "var(--tertiary-color)",

        background: "var(--background-color)",
        grayTint: "var(--gray-tint)",
        grayCore: "var(--gray-core)",

        text: "var(--text-color)",
        textDark: "var(--text-dark)",
      },

      spacing: {
        "xxs": "var(--space-xxs)",
        "xs": "var(--space-xs)",
        "sm": "var(--space-sm)",
        "md": "var(--space-md)",
        "lg": "var(--space-lg)",
        "xl": "var(--space-xl)",
        "xxl": "var(--space-xxl)",
        "custom": "var(--custom-spacing)",
      },

      padding: {
        xs: "var(--padding-xs)",
        s: "var(--padding-s)",
        m: "var(--padding-m)",
        l: "var(--padding-l)",
        xl: "var(--padding-xl)",
      },

      margin: {
        xs: "var(--margin-xs)",
        s: "var(--margin-s)",
        m: "var(--margin-m)",
        l: "var(--margin-l)",
        xl: "var(--margin-xl)",
      },

      borderRadius: {
        xs: "var(--radius-xs)",
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        round: "var(--radius-round)",
        pill: "var(--radius-pill)",
      },

      boxShadow: {
        xs: "var(--shadow-xs)",
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
      },

      fontSize: {
        xs: "var(--font-xs)",
        sm: "var(--font-sm)",
        md: "var(--font-md)",
        lg: "var(--font-lg)",
        xl: "var(--font-xl)",
        xxl: "var(--font-xxl)",
      },

      transitionDuration: {
        fast: "var(--transition-fast)",
        normal: "var(--transition-normal)",
        slow: "var(--transition-slow)",
      },

      screens: {
        sm: "var(--break-sm)",
        md: "var(--break-md)",
        lg: "var(--break-lg)",
        xl: "var(--break-xl)",
      },
    },
  },
  plugins: [],
}
