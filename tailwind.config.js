/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./bai-tap/**/*.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['inter'],
      },
      fontSize: {
        H1: [
          '72px',
          {
            lineHeight: '98px',
            fontWeight: '800',
          },
        ],
        H2: [
          '48px',
          {
            lineHeight: '64px',
            fontWeight: '800',
          },
        ],
        H3: [
          '40px',
          {
            lineHeight: '54px',
            fontWeight: '800',
          },
        ],
        H4: [
          '28px',
          {
            lineHeight: '40px',
            fontWeight: '700',
          },
        ],
        H5: [
          '24px',
          {
            lineHeight: '32px',
            fontWeight: '600',
          },
        ],
        H6: [
          '20px',
          {
            lineHeight: '30px',
            fontWeight: '500',
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
        Label: [
          '14px',
          {
            lineHeight: '20px',
            fontWeight: '500',
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
