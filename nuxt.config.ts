// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  app: {
    baseURL: '/',
    head: {
      title: 'Elisa S Fernández',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'title',
          name: 'title',
          content: 'Elisa S Fernández',
        },
        {
          hid: 'description',
          name: 'description',
          content:
            process.env.npm_package_description ||
            'Elisa S Fernández is a Photographer based in Madrid - elisasanchezfernandez@gmail.com',
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Elisa S Fernández',
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content:
            'Elisa S Fernández is a Photographer based in Madrid - elisasanchezfernandez@gmail.com',
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: '/logo.png',
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: 'Elisa S Fernández',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Elisa S Fernández',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'Elisa S Fernández is a Photographer based in Madrid - elisasanchezfernandez@gmail.com',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: '/logo.png',
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: '/logo.png',
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: 'Elisa S Fernández',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
  components: true,
  modules: ['@nuxt/image'],
  vite: {
    assetsInclude: ['**/**/*.mov', '/**/*.mov', '/*.mov'],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/styles/main.scss";',
        },
      },
    },
  },
})
