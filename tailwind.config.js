/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        nav_inactive: "var(--color-text-primary)",
        tag: "var(--color-tag)",
        tag_border: "var(--color-tag-border)",
      },
    },
  },
  plugins: [],
};
