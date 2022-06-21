// eslint-disable-next-line import/no-extraneous-dependencies
import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  srcDir: 'src/',
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  tailwindcss: {
    cssPath: '~/src/tailwind.css',
    configPath: '~/tailwind.config.js',
  },
})
