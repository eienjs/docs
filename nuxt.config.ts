// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content',
    'nuxt-og-image',
    'nuxt-llms',
  ],
  devtools: {
    enabled: true,
  },
  css: ['~/assets/css/main.css'],
  content: {
    build: {
      markdown: {
        toc: {
          searchDepth: 1,
        },
      },
    },
    experimental: {
      sqliteConnector: 'native',
    },
  },
  runtimeConfig: {
    public: {
      siteUrl: 'https://eienjs.com',
    },
  },
  experimental: {
    asyncContext: true,
  },
  compatibilityDate: '2026-06-30',
  typescript: {
    nodeTsConfig: {
      include: ['../content.config.ts'],
    },
  },
  llms: {
    domain: 'https://eienjs.com',
    title: 'EienJS',
    description: 'EienJS is a collection of packages for AdonisJS and more.',
  },
  ogImage: {
    zeroRuntime: true,
  },
  prerender: {
    routes: [
      '/',
    ],
    crawlLinks: true,
  },
});
