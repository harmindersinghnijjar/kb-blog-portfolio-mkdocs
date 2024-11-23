/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.html', // Matches any HTML files inside src/ folder and its subfolders
    './docs/**/*.md',  // Matches any Markdown files inside docs/ folder
  ],
  theme: {
    extend: {
      animation: {
        scroll: 'scroll 10s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // Adds Tailwind forms plugin
  ],
};
