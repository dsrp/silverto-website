<template>
  <div class="navigation">
    <nav class="menu">
      <nuxt-link :to="localePath('/')">
        {{ $t('home') }}
      </nuxt-link> |
      <nuxt-link :to="localePath('/about')">
        {{ $t('about') }}
      </nuxt-link> |
      <nuxt-link :to="localePath('/festa-de-primavera')">
        {{ $t('primavera') }}
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
  </div>
</template>

<i18n lang="yaml">
en:
  home: Home
  about: About
  primavera: Spring
  subscribe: Subscribe
pt:
  about: Sobre nos
  primavera: Primavera
  subscribe: Inscrever
</i18n>

<style lang="scss" scoped>
@import '~assets/scss/colors.scss';

div.bg-transparent {
  background-color: transparentize($dark-green, 0.65);

}

.navigation {
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;

  padding: 7pt;

  background-color: $medium-green;

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
</style>
