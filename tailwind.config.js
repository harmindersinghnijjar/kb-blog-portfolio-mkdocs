/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
<<<<<<< HEAD
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
=======
    './src/**/*.html', // If you have any HTML files inside of src/ folder
    './docs/**/*.md', // If you have any Markdown files
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

>>>>>>> e525c68f31edabb84fb4f95da4ea4acff4833ec0
