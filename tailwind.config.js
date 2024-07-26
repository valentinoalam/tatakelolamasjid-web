/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  // mode: 'jit',
  // darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        sidebar: '320px',
        search: '400px',
      },
      rotate: {
        137: '137deg',
      },
      backgroundColor: {
        packed: '#EEF6FF',
        // packed: "#f2f2f2", you can use this color if you like
      },
      colors: {
        primary: 'green',
      },
      fontFamily: {
        lexend: "'Lexend', sans-serif",
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    '@tailwindcss/forms',
    '@tailwindcss/typography',
    '@tailwindcss/aspect-ratio',
  ],
}
