// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeNova from 'starlight-theme-nova';

const footerText = `© ${new Date().getFullYear()} EienJS - Made with ❤️ and open source mind`;

// https://astro.build/config
export default defineConfig({
  site: 'https://eienjs.com',
  integrations: [
    starlight({
      plugins: [starlightThemeNova()],
      title: 'EienJS',
      tagline: 'Libraries for work together with AdonisJS',
      description: 'EienJS is a suite of libraries for work together with AdonisJS',
      favicon: '/favicon.ico',
      logo: {
        src: './src/assets/eienjs_logo.webp',
      },
      social: [{ icon: 'github', label: 'Github', href: 'https://github.com/eienjs' }],
      editLink: {
        baseUrl: 'https://github.com/eienjs/docs/edit/main',
      },
      locales: {
        root: {
          label: 'English',
          lang: 'en',
        },
      },
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Manifest', slug: 'getting-started/manifest' },
            { label: 'Contributing', slug: 'getting-started/contributing' },
          ],
        },
        {
          label: 'Packages',
          items: [
            {
              label: 'adonisjs-api-query',
              collapsed: true,
              items: [
                {
                  label: 'Installation',
                  link: '/packages/adonisjs-api-query/getting-started',
                },
                {
                  label: 'Filtering',
                  link: '/packages/adonisjs-api-query/filtering',
                },
                {
                  label: 'Sorting',
                  link: '/packages/adonisjs-api-query/sorting',
                },
                {
                  label: 'Including relationships',
                  link: '/packages/adonisjs-api-query/including-relationships',
                },
              ],
            },
            {
              label: 'adonisjs-jsend',
              collapsed: true,
              items: [
                {
                  label: 'Installation',
                  link: '/packages/adonisjs-jsend/getting-started',
                },
                {
                  label: 'Specification',
                  link: '/packages/adonisjs-jsend/specification',
                },
              ],
            },
          ],
        },
      ],
      lastUpdated: true,
      pagination: false,
      customCss: ['./src/styles/custom.css'],
    }),
  ],
});
