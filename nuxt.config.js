
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Ecoaldeia Silverto',
    htmlAttrs: {
      lang: 'pt'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Fomentar uma comunidade de árvores e de pessoas em Silverto, Rubiães, Paredes de Coura.' }
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: 'apple-touch-icon.png?v=eEGmmAAQq3' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: 'favicon-32x32.png?v=eEGmmAAQq3' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: 'favicon-16x16.png?v=eEGmmAAQq3' },
      { rel: 'manifest', href: 'site.webmanifest?v=eEGmmAAQq3' },
      { rel: 'mask-icon', href: 'safari-pinned-tab.svg?v=eEGmmAAQq3" color="#50a64c' },
      { rel: 'shortcut icon', href: 'favicon.ico?v=eEGmmAAQq3' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    [
      'nuxt-i18n',
      {
        locales: ['en', 'pt'],
        defaultLocale: 'en',
        strategy: 'prefix',
        detectBrowserLanguage: {
          useCookie: true,
          alwaysRedirect: true
        },
        vueI18nLoader: true,
        vueI18n: {
          fallbackLocale: 'en',
          messages: {
            en: {
              greeting: 'Hello world!'
            },
            pt: {
              greeting: '¡Hola mundo!'
            }
          }
        }
      }
    ]
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, { isClient, loaders: { vue } }) {
      // Extend only webpack config for client-bundle
      if (isClient) {
        vue.transformAssetUrls.video = ['src', 'poster']
      }
    }
  }
}
