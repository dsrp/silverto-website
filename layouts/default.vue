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
    const baseUrl = 'https://silverto.pt'
    const canonical = `${baseUrl}${this.$route.path}`

    return {
      title: this.$t('title'),
      meta: [
        { hid: 'description', name: 'description', content: this.$t('description') },
        // Facebook OG
        { hid: 'og:title', name: 'og:title', content: this.$t('title') },
        { hid: 'og:type', name: 'og:type', content: 'website' },
        { hid: 'og:url', name: 'og:url', content: canonical },
        { hid: 'og:description', name: 'og:description', content: this.$t('description') },
        { hid: 'og:image', name: 'og:image', content: `${baseUrl}/background-video/poster.jpg` },
        { hid: 'og:site_name', name: 'og:site_name', content: 'Ecoaldeia Silverto' },
      ]
    }
  }
}
</script>

<i18n lang="yaml">
en:
  description: Fostering a community of trees and people in Silverto, Paredes de Coura, Northern Portugal.
  title: Ecoaldeia Silverto
pt:
  description: Fomentar uma comunidade de árvores e de pessoas em Silverto, Rubiães, Paredes de Coura.
  title: Ecoaldeia Silverto
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
