<template>
  <div id="app">
    <nav id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">Sobre nos</router-link> |
      <router-link to="/subscribe">Assinar</router-link>
    </nav>

    <main class="main">
      <nuxt/>
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
  height: 100%;
  flex-flow: column;
}
#nav {
  padding: 7pt;
  background-color: transparentize($dark-green, 0.85);
  a {
    font-weight: bold;
    color: white;
    &.router-link-exact-active {
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
