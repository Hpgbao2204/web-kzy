/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Pastel pink palette - dịu mắt, dễ nhìn
        'pastel': {
          50: '#fef5f9',
          100: '#fde8f2',
          200: '#fcd1e6',
          300: '#fab0d4',
          400: '#f780b8',
          500: '#f06ba5',
          600: '#de3b7e',
          700: '#c12a66',
          800: '#a02754',
          900: '#852549',
        },
        'soft-pink': '#ffc9d9',
        'light-pink': '#ffe4ec',
        'cream': '#fff8f3',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
