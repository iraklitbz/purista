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
        'nuxt-graphql-client',
        '@nuxt/content',
        '@nuxtjs/strapi',
        '@pinia/nuxt',
        '@vueuse/nuxt',
        ['@nuxtjs/google-fonts', {
            families: {
              'Montserrat': [300, 400, 700],
              'Noto Sans Georgian': true,
              download: true,
              inject: true
            }
          }]
    ],
    strapi: {
      url: process.env.STRAPI_URL || 'https://puristaback.com',
      prefix: '/api',
      version: 'v4',
      cookie: {},
      cookieName: 'purista_jwt'
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
          label: 'GE'
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
    },
    runtimeConfig: {
      public: {
        GQL_HOST: 'https://puristaback.com/graphql',
        CEM_URL: process.env.CEM_URL,
        SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
      }
    }
})
