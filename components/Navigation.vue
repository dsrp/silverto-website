<template>
  <div class="navigation bg-transparent">
    <nav class="logo">
   <img alt="Ecoaldeia Silverto" class="logo-silverto" src="@/assets/img/logos/nuts.png">
   <img alt="Ecoaldeia Silverto" class="logo-text" src="@/assets/img/logos/napis-logo.png">
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
    <div class="subscribe">
      <nuxt-link :to="localePath('/subscribe')">
        {{ $t("subscribe") }}
      </nuxt-link>
    </div>
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
  width: 200px;
  position:relative;
  bottom: 50px;
  }
  .logo-text {
      width: 167px;
    position: relative;
    bottom: 107px;
    right: 115px;
  }

.navigation {
  position: fixed;
  width: 100%;
  height: 40px;
  display: flex;
  padding: 20px;
  justify-content: space-around;

  .menu {
    padding: 10px;
  }
  .subscribe {
    padding: 10px;
    border-radius: 30px;
    background-color: #489534;
    background-image: linear-gradient(86deg, #489534, #3a620c);
    box-shadow: 0 1px 12px 0 rgb(0 0 0 / 6%);
    transition: background-color 0.2s, color 0.2s;
  }
  .subscribe a {
    color: black;
    &:hover {
      color: white;
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
      color: $medium-green;
      text-decoration: none;
    }
    &:hover {
      color: $medium-green;
    }
  }
}
</style>
