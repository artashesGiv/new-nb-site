// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  css: ['~/assets/styles/main.css', '~/assets/styles/animations.css', 'leaflet/dist/leaflet.css'],
  ssr: false,
  devtools: { enabled: false },
  image: {
    provider: 'none',
  },
  vite: {
    plugins: [tailwindcss()],
  },

  modules: [
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxt/icon',
    '@nuxtjs/google-fonts',
    '@vee-validate/nuxt',
    '@nuxt/image',
  ],

  icon: {
    customCollections: [
      {
        prefix: 'icons',
        dir: './static/icons',
      },
    ],
  },

  googleFonts: {
    families: {
      'Nunito Sans': '200..700',
    },
  },
})
