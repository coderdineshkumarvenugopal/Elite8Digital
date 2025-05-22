/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef9ff',
          100: '#d9f2ff',
          200: '#bcebff',
          300: '#8ee0ff',
          400: '#58caff',
          500: '#33acff',
          600: '#1a8df8',
          700: '#1674e8',
          800: '#195ebc',
          900: '#1a4e93',
          950: '#153160',
        },
        secondary: {
          50: '#ecfdfd',
          100: '#d0f7f7',
          200: '#a6efef',
          300: '#67e2e2',
          400: '#32cece',
          500: '#17b1b1',
          600: '#138c8c',
          700: '#156f6f',
          800: '#165858',
          900: '#164a4a',
          950: '#063131',
        },
        accent: {
          50: '#fff4ed',
          100: '#ffe6d5',
          200: '#fec9aa',
          300: '#fda574',
          400: '#fb7b3e',
          500: '#f85d19',
          600: '#e8440c',
          700: '#c1330c',
          800: '#982a11',
          900: '#7a2511',
          950: '#420f07',
        },
        dark: {
          900: '#121212',
          800: '#1e1e1e',
          700: '#2d2d2d',
          600: '#3d3d3d',
          500: '#4d4d4d',
        },
      },
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-in-up': 'fadeInUp 0.7s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};