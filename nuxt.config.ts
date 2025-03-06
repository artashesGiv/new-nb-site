// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/styles/main.css', '~/assets/styles/animations.css'],
  ssr: false,

  vite: {
    plugins: [tailwindcss()],
  },

  modules: [
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
