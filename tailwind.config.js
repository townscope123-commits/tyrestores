/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        tyre: {
          black: '#0A0A0A',
          asphalt: '#1C1C1E',
          red: '#D91E2B',
          redDark: '#A2141F',
          white: '#FFFFFF',
          fog: '#F4F4F5',
          line: '#E4E4E7',
        },
      },
      fontFamily: {
        display: ['var(--font-oswald)'],
        body: ['var(--font-inter)'],
      },
      backgroundImage: {
        'tread': "repeating-linear-gradient(45deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 2px, transparent 2px, transparent 10px)",
      },
      animation: {
        'bounce-slow': 'bounce 2.5s infinite',
      },
    },
  },
  plugins: [],
};
