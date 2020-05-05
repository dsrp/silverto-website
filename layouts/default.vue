<template>
  <div id="app">
    <header class="header">
      <Navigation :class="{ 'bg-transparent': transparentNav }" />
    </header>

    <main class="main">
      <nuxt />
    </main>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'

export default {
  components: {
    Navigation
  },
  computed: {
    transparentNav () {
      return this.$nuxt.$route.name.startsWith('index__')
    }
  },
  head () {
    const i18nSeo = this.$nuxtI18nSeo()

    return {
      htmlAttrs: {
        ...i18nSeo.htmlAttrs
      },
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('description'),
          ...i18nSeo.meta
        }
      ],
      link: [
        {
          hid: 'apple-touch-icon',
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png',
          ...i18nSeo.link
        }
      ]
    }
  }
}
</script>

<i18n lang="yaml">
en:
  description: Fostering a community of trees and people in Silverto, Paredes de Coura, Northern Portugal.
pt:
  description: Fomentar uma comunidade de árvores e de pessoas em Silverto, Rubiães, Paredes de Coura.
</i18n>

<style lang="scss">
@import 'normalize-scss';
@include normalize();

@import '~assets/scss/colors.scss';

html, body {
  height: 100%;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $dark-green;
  display: flex;
  min-height: 100vh;
  flex-flow: column;
}
.main {
  flex: 1;
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
}
</style>
