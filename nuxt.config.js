
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Ecoaldeia Silverto',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png?v=eEGmmAAQq3' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png?v=eEGmmAAQq3' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png?v=eEGmmAAQq3' },
      { rel: 'manifest', href: '/site.webmanifest?v=eEGmmAAQq3' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg?v=eEGmmAAQq3" color="#50a64c' },
      { rel: 'shortcut icon', href: '/favicon.ico?v=eEGmmAAQq3' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#50A54C' },
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
        locales: [
          {
            code: 'pt',
            iso: 'pt-PT'
          },
          {
            code: 'en',
            iso: 'en-US'
          }
        ],
        baseUrl: 'https://silverto.pt',
        seo: false,
        defaultLocale: 'en',
        strategy: 'prefix',
        detectBrowserLanguage: {
          useCookie: true
        },
        vueI18nLoader: true,
        vueI18n: {
          fallbackLocale: 'en'
        }
      }
    ],
    [
      '@nuxtjs/sitemap',
      {
        hostname: 'https://silverto.pt'
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
    // analyze: {
    //   analyzerMode: 'static'
    // },
    extend (config, { isClient, loaders: { vue } }) {
      // Extend only webpack config for client-bundle
      if (isClient) {
        vue.transformAssetUrls.video = ['src', 'poster']
      }
    }
  }
}
