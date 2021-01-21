<template>
  <div id="app">
    <header>
      <clockDigital></clockDigital>
    </header>
      <router-link to="/">Home</router-link> |
      <router-link to="/formulaire">Formulaire</router-link> |
      <router-link to="/bitcoin">Crypto-monnaies</router-link> |
      <router-link to="/clock">L'horloge</router-link> |
    <router-view />
  </div>
</template>

<script>
import clockDigital from './views/clockDigital'


export default {
  name: 'App',
  components: {
    clockDigital

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
