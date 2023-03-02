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
    <b-button class="subscribe" href="#">
      {{ $t("subscribe") }}
    </b-button>
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
  b-button {
    margin-right: 60px;
    padding: 13px;
    border-radius: 30px;
    background-image: linear-gradient(86deg, #ffffff, #eccec7);
    box-shadow: 0 1px 12px 0 rgb(0 0 0 / 6%);
    transition: background-color 0.2s, color 0.2s;
    font-family: Rubik, sans-serif;
    font-size: 12px;
    font-weight: bold;
    &:hover {
      cursor: pointer;
      background-image: linear-gradient(86deg, #eccec7, #ffffff );
      transition: background-color 0.2s, color 0.2s;
    }
  }
  a {
    font-family: Rubik, sans-serif;
    font-size: 14px;
    padding: 10px;
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
}
</style>
