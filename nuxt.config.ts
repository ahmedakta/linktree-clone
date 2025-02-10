// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  pages: true,
  experimental: {
    payloadExtraction: false,
  },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    "nuxt-icon",
    "nuxt-lodash",
    "@pinia/nuxt",
    "pinia-plugin-persistedstate/nuxt",
    "@vite-pwa/nuxt",
    "@nuxtjs/tailwindcss",
  ],
  // pwa: {
  //   manifest: {
  //     name: "Linktree Clone",
  //     short_name: "Linktree Clone",
  //     description: "Linktree Clonet Project using Nuxt 3",
  //     theme_color: "#32CD32",
  //     icons: [
  //       {
  //         src: "pwa-192x192.png",
  //         sizes: "192x192",
  //         type: "image/png",
  //       },
  //       {
  //         src: "pwa-512x512.png",
  //         sizes: "512x512",
  //         type: "image/png",
  //       },
  //     ],
  //   },
  //   devOptions: {
  //     enabled: true,
  //     type: "module",
  //   },
  // },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width , initial-scale=1, maximum-scale=1",
    },
  },
});
