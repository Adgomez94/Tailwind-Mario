module.exports = {
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: false, // or 'media' or 'class'
  mode: 'jit',
  theme: {
    extend: {
      backgroundImage:{
        'wave-pattern': 'url(../asset/img/wave-white.png)',
        'wave-pattern-dots': 'url(../asset/img/pattern-white-dots.png)',
        'pattern-characters-red': "url(../asset/img/pattern-characters-red.png)",
        'character-mario': "url(../asset/img/character-l.png)",
        'wave-pink': "url(../asset/img/wave-pink.png)",
        'yellow-dots': "url(../asset/img/pattern-yellow-dots.png)"
      },
      screens:{
        'xsm':'320px'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
