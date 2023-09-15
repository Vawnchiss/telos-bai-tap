/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./bai-tap/**/*.html'],
  theme: {
    screens: {
      tablet: '640px',
      // => @media (min-width: 640px) { ... }

      laptop: '1024px',
      // => @media (min-width: 1024px) { ... }

      desktop: '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      fontFamily: {
        sans: ['inter'],
      },
      fontSize: {
        H2: [
          '48px',
          {
            lineHeight: '64px',
            fontWeight: '800',
          },
        ],
        H5: [
          '24px',
          {
            lineHeight: '32px',
            fontWeight: '600',
          },
        ],
        Lead1: [
          '18px',
          {
            lineHeight: '32px',
            fontWeight: '400',
          },
        ],
        Body1: [
          '16px',
          {
            lineHeight: '26px',
            fontWeight: '400',
          },
        ],
        Body2: [
          '14px',
          {
            lineHeight: '24px',
            fontWeight: '400',
          },
        ],
        Subtitile1: [
          '18px',
          {
            lineHeight: '28px',
            fontWeight: '700',
          },
        ],
      },
      colors: {
        Turquoise: '#2EC5CE',
      },
    },
  },
  plugins: [],
};
