/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6c1212',
          light: '#8a1f1f',
        },
        secondary: '#f2f2f2',
        'accent-gold': '#c9a84c',
        'accent-red': '#c0392b',
        'brand-dark': '#1c1d1d',
        'brand-text': '#808080',
        'brand-border': '#e8e8e1',
        'warm-cream': '#fff9ea',
      },
      fontFamily: {
        heading: ['"Libre Baskerville"', 'serif'],
        body: ['"Poppins"', 'sans-serif'],
      },
      boxShadow: {
        product: '0 2px 12px rgba(0,0,0,0.06)',
        'product-hover': '0 8px 24px rgba(0,0,0,0.12)',
        drawer: '0 4px 20px rgba(0,0,0,0.1)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        pulseGlow: 'pulseGlow 3s ease-in-out infinite',
        marquee: 'marquee 25s linear infinite',
      },
    },
  },
  plugins: [],
};
