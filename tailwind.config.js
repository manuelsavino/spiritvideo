const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class',
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./pages/*.js'],
  theme: {
    colors: {
      blue: colors.blue,
      red: colors.red,
      white: colors.white,
      black: colors.black,
      gray: colors.trueGray,
      indigo: colors.indigo,
      rose: colors.rose,
      yellow: '#FFEC02',
    },
  },
};
