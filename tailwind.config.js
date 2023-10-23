/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-text-secondary)",
        buttons: "var(--color-buttons)",
        typography: "var(--color-typography)",
      },
    },
  },
  plugins: [],
};
