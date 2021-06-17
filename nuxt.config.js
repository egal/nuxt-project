import { resolve } from 'path'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'breaker',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        hid: 'maps-googleapis',
        src: `https://maps.googleapis.com/maps/api/js?libraries=places&language=en&key=AIzaSyCSWMGA9sbWIlwRctNXWEJMDMVw3XgUfKQ`,
        defer: true,
      },
    ],
  },

  // The alias property https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-alias
  alias: {
    img: resolve(__dirname, './assets/img'),
    style: resolve(__dirname, './assets/style'),
    script: resolve(__dirname, './assets/script'),
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/style/style.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/main.ts' },
    { src: '~/plugins/base-url.config.js' },
    { src: '~/plugins/axios.config.js' },
    { src: '~assets/script/directives.js' },
    { src: '~/plugins/vue-upload-component.ts', mode: 'client' },
    { src: '~/plugins/vue-inputmask.ts', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    ['@nuxtjs/dotenv', { systemvars: true }],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    ['cookie-universal-nuxt', { alias: 'cookies', parseJSON: false }],
    ['@nuxtjs/toast', { alias: 'toaster' }],
    ['bootstrap-vue/nuxt'],
  ],

  bootstrapVue: {
    componentsPlugins: ['Icons'],
    // Install the `IconsPlugin` plugin (in addition to `BootstrapVue` plugin)
    icons: true,
    bootstrapCSS: false, // Or `css: false`
    bootstrapVueCSS: false, // Or `bvCSS: false`
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  target: 'static',
}
