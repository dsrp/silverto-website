<template>
  <div id="app">
    <nav id="nav">
      <nuxt-link to="/">
        Home
      </nuxt-link> |
      <nuxt-link to="/about">
        Sobre nos
      </nuxt-link> |
      <nuxt-link to="/subscribe">
        Assinar
      </nuxt-link>
    </nav>

    <main class="main">
      <nuxt />
    </main>
  </div>
</template>

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
#nav {
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
