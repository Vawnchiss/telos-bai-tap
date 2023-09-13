/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./bai-tap/**/*.html'],
  theme: {
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
      },
    },
  },
  plugins: [],
};
