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
  }
}
</script>

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
