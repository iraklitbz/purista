module.exports = {
  content: [
    './assets/**/*.scss',
    './components/*.vue,js',
    './components/**/*.vue,js',
    './pages/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.js,ts',
    './*.{vue,js,ts}',
    './nuxt.config.js,ts'
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'hell-black': '#000',
        'dark-black': '#111',
        'black': '#111',
        'primary': '#D4AD68',
        'primary-light': '#ddbe87',
        'primary-lighter': '#f7efe2',
        'primary-dark': '#c7943a',
        'primary-darker': '#9a722c',
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ]
}
