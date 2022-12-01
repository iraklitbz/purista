export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'purista',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Noto+Sans+Georgian:wght@300;400;700&display=swap'}
    ],
    script: [
      { src: 'https://unpkg.com/codyhouse-framework@3.0.8/main/assets/js/util.js', async: true }
    ],
    htmlAttrs: {
      class: 'js'
    }
  },
  pageTransition: {
    name: 'fade-down',
    mode: 'out-in'
    },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/app.scss',
    '@/assets/css/base.css',
    '@/assets/css/main.css',
    '@/assets/css/transition.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    '~/components'
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '~/modules/svg-module',
    'nuxt-i18n'
  ],
  styleResources: {
    scss: [
        '~/assets/scss/resources/_breakpoints.scss',
        '~/assets/scss/resources/_mixins.scss'
    ]
  },
  i18n: {
    seo: false, // seo is set on default layout, following this https://i18n-legacy.nuxtjs.org/seo#improving-performance
    detectBrowserLanguage: false,
    lazy: true,
    langDir: 'lang/',
    defaultLocale: 'ge',
    locales: [
        {
            code: 'ge',
            iso: 'ge-GE',
            file: 'ge_GE.json'
        },
        {
          code: 'en',
          iso: 'en-GB',
          file: 'en_GB.json'
      }
    ],
    vueI18n: {
        fallbackLocale: 'ge'
    }
},
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
