/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  important: true,
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-text-secondary)',
        tag: 'var(--color-secondary)',
        tag_border: 'var(--color-tag-border)',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
