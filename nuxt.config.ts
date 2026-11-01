// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content',
    'nuxt-og-image',
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
  experimental: {
    asyncContext: true,
  },
  compatibilityDate: '2026-06-30',
  typescript: {
    nodeTsConfig: {
      include: ['../content.config.ts'],
    },
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
