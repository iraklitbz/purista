export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
    modules: [
        'nuxt-icons',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/fontaine',
        '@nuxtjs/i18n',
        '@nuxt/image',
        '@nuxtjs/apollo',
        '@nuxt/content',
        ['@nuxtjs/google-fonts', {
            families: {
              'Montserrat': [300, 400, 700],
              'Noto Sans Georgian': true,
              download: true,
              inject: true
            }
          }]
    ],
    apollo: {
      clients: {
        default: {
          httpEndpoint: 'http://puristaback.com:1337/graphql'
        }
      },
    },
    image: {
      provider: 'cloudinary',
      cloudinary: {
        baseURL: 'https://res.cloudinary.com/dhaznxmws/image/upload/v1700135827/',
        modifiers: {
          format: 'webp',
          effect: 'sharpen:100',
          quality: 'auto:best',
        }
      }
    },
    tailwindcss: {
      exposeConfig: true,
      cssPath: '~/assets/scss/main.scss'
    },
    i18n: {
      strategy: 'prefix_except_default',
      locales: [
        {
          code: 'ka',
          name: 'georgian',
          label: 'KA'
        },
        {
          code: 'en',
          name: 'English',
          label: 'EN'
        }
      ],
      vueI18n: './i18n.config.ts',
      defaultLocale: 'ka'
    },
    build: {
      transpile: ['tslib']
    }
})
