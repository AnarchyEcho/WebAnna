import { defineNuxtConfig } from 'nuxt/config';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [],
      script: [],
    },
  },
  typescript: {
    strict: true,
  },
  devtools: {
    enabled: true,
  },
  modules: ['@nuxt/content'],
  content: {
    documentDriven: true,
    contentHead: true,
    markdown: {
      anchorLinks: false,
      toc: {
        depth: 3,
        searchDepth: 3,
      },
    },
  },
});
