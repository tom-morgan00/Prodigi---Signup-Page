module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'brand-purple': {
          100: '#4630D4',
          200: ': #4352FF',
        },
        'pale-text': '#A4A4A4',
        button: {
          100: '#a0a8ff',
          200: '#7f87e1',
        },
      },
      fontSize: {
        label: ['0.5rem', { lineHeight: '0.8rem' }],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
