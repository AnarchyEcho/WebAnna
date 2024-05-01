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
  runtimeConfig: {
    oauth: {
      discord: {
        clientId: process.env.NUXT_DISCORD_CLIENT_ID,
        clientSecret: process.env.NUXT_DISCORD_CLIENT_SECRET,
      },
    },
    public: {
      annaWebhookId: '',
      annaWebhookToken: '',
    },
    session: {
      maxAge: 60 * 60 * 24 * 7,
      name: 'nuxt-session',
      password: process.env.NUXT_SESSION_PASSWORD || '',
      cookie: {
        sameSite: 'lax',
      },
    },
  },
  routeRules: {
    '/settings': {
      appMiddleware: 'auth-check',
    },
  },
  modules: ['nuxt-auth-utils', '@nuxt/image', '@nuxt/content'],
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
