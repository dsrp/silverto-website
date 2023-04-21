<template>
  <div class="navigation bg-transparent">
    <nav class="logo">
      <img
        alt="Ecoaldeia Silverto"
        class="logo-silverto"
        src="@/assets/img/logos/ecoaldeia_silverto_logo-02.png"
      >
    </nav>
    <nav class="menu">
      <nuxt-link :to="localePath('/')">
        {{ $t("home") }}
      </nuxt-link>
      |
      <nuxt-link :to="localePath('/about')">
        {{ $t("about") }}
      </nuxt-link>
      |
      <nuxt-link v-if="$i18n.locale !== 'en'" :to="switchLocalePath('en')">
        English
      </nuxt-link>
      <nuxt-link v-if="$i18n.locale !== 'pt'" :to="switchLocalePath('pt')">
        Português
      </nuxt-link>
    </nav>
    <nuxt-link :to="localePath('subscribe')">
      <button class="primary-button">
        {{ $t("subscribe") }}
      </button>
    </nuxt-link>
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

<style lang="scss" scoped>
@import "~assets/scss/colors.scss";

div.bg-transparent {
  background-color: transparentize($dark-green, 0.65);
}

.logo-silverto {
  width: 250px;
  position: relative;
  bottom: 50px;
}

.navigation {
  position: fixed;
  width: 100%;
  height: 40px;
  padding: 20px;
  display: flex;
  justify-content: space-evenly;

  .menu {
    padding: 10px;
  }
  .primary-button {
    border-radius: 24pt;
    border: none;
    padding: 2ex 2em 2ex 2em;
    font-size: 80%;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      background-color: lighten($brown, 5%);
      transition: background-color 0.2s ease-in;
    }
  }
}
a {
  font-family: Rubik, sans-serif;
  font-size: 14px;
  padding-right: 10px;
  padding-left: 10px;
  cursor: pointer;
  font-weight: bold;
  color: white;
  text-decoration: none;
  &.nuxt-link-exact-active {
    color: #eccec7;
    text-decoration: none;
  }
  &:hover {
    color: #eccec7;
  }
}
</style>
