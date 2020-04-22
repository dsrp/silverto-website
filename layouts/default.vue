<template>
  <div id="app">
    <header class="header">
      <nav class="menu">
        <nuxt-link :to="localePath('/')">
          {{ $t('home') }}
        </nuxt-link> |
        <nuxt-link :to="localePath('/about')">
          {{ $t('about') }}
        </nuxt-link> |
        <nuxt-link :to="localePath('/subscribe')">
          {{ $t('subscribe') }}
        </nuxt-link>
      </nav>

      <nav class="lang">
        <nuxt-link
          v-if="$i18n.locale !== 'en'"
          :to="switchLocalePath('en')"
        >
          English
        </nuxt-link>
        <nuxt-link
          v-if="$i18n.locale !== 'pt'"
          :to="switchLocalePath('pt')"
        >
          Português
        </nuxt-link>
      </nav>
    </header>

    <main class="main">
      <nuxt />
    </main>
  </div>
</template>

<i18n lang="yaml">
en:
  home: Home
  about: About
  subscribe: Subscribe

pt:
  about: Sobre nos
  subscribe: Inscrever
</i18n>

<style lang="scss">
@import 'normalize-scss';
@include normalize();

$dark-green: #19341A;
$medium-green: #50A54C;
$light-green: #B7D433;
$orange: #EFB81D;
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
nav {
  .lang {
    align-items: right;
  }
}

header.header {
  display: flex;
  flex-flow: column;
  align-items: center;

  .lang {
    align-self: right;
  }

  padding: 7pt;
  background-color: transparentize($dark-green, 0.85);
  a {
    font-weight: bold;
    color: white;
    &.nuxt-link-exact-active {
      color: $orange;
      text-decoration: none;
    }
    &:hover {
      text-decoration: none;
    }
  }
}
.main {
  flex: 1;
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
}
</style>
