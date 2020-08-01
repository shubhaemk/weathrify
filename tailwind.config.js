module.exports = {
  purge: [
    'src/**/*.js',
    'src/**/*.jsx',
    'src/**/*.ts',
    'src/**/*.tsx',
    'public/**/*.html',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    minWidth: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      almost: '85%',
      almostFull: '90%',
      full: '100%',
    },
    minHeight: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      almost: '85%',
      almostFull: '90%',
      full: '100%',
    },
    maxWidth: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      almost: '85%',
      almostFull: '90%',
      full: '100%',
    },
    maxHeight: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      almost: '85%',
      almostFull: '95%',
      full: '100%',
    },
    borderRadius: {
      xl: '1rem',
    },
    backdropFilter: {
      none: 'none',
      blur: 'blur(0.5rem)',
    },
  },
  variants: {
    filter: ['responsive'],
    backdropFilter: ['responsive'],
  },
  plugins: [require('tailwindcss-filters')],
};
