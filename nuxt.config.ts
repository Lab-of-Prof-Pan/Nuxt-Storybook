// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-10-22',
  srcDir: 'src/',
  devtools: {
    enabled: true
  },

  css: ['~/assets/main.scss'],
  vite: {
    // server: { hmr: { protocol: 'wss' } },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/_colors.scss" as *;'
        }
      }
    }
  },

  components: {
    dirs: ['~/components']
  },

  modules: [
    '@nuxt/ui',
    '@nuxtjs/color-mode',
    '@nuxt/eslint',
    '@nuxtjs/storybook'
  ],

  colorMode: {
    preference: 'system',
    fallback: 'light'
  }
});
