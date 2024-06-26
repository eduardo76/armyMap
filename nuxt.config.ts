import { ThemeDefinition } from 'vuetify';

const normalTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: '#009688',
    secondary: '#d92344',
    background: '#f5f4f4',
  },
}

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  runtimeConfig: {
    
    API_TOKEN: process.env.NUXT_PUBLIC_API_TOKEN,
    
    public: {
      API_URL: process.env.NUXT_PUBLIC_API_URL
    }
  },
  // basicAuth: {
  //   enabled: true,
  //   users: users,
  //   // Optional: Whitelist routes
  //   // allowedRoutes: ["/api/.*"],
  // },

  modules: [
    '@invictus.codes/nuxt-vuetify',
    '@kgierke/nuxt-basic-auth',
    // 'nuxt-api-party',
    'nuxt-snackbar',
    '@hebilicious/vue-query-nuxt',
    // 'nuxt-cloudflare-analytics',
    'dayjs-nuxt', // https://github.com/fumeapp/dayjs
    '@vueuse/nuxt', // https://vueuse.org/guide/
    'nuxt-mapbox', // https://alexlavoie42.github.io/Nuxt-Mapbox/
  ],

  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon-logi.png' }
      ]
    },
  },

  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  mapbox: {
    accessToken: process.env.MAPBOX_ACCESS_TOKEN!
  },
  
  dayjs: {
    locales: ['pt-br'],
    plugins: ['relativeTime', 'utc', 'timezone', 'localizedFormat'],
    defaultLocale: 'pt-br',
    defaultTimezone: 'America/Sao_Paulo',
  },

  vuetify: {
    // https://vuetifyjs.com
    vuetifyOptions: {
      defaults: {
        VTextField: {
          density: "default",
          color: "primary",
        },
        VBtn: {
          color: "primary",
        },
      },
      theme: {
        defaultTheme: 'normalTheme',
        themes: {
          normalTheme
        }
      },
    },
    // https://github.com/invictus-codes/nuxt-vuetify
    moduleOptions: {
      useVuetifyLabs: true,
    }
  }
})
