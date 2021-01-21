<template>
  <div id="app">
    <header id="header">
      <clockDigital style="color: white; font-size: 20px; text-align: right; padding: 20px 30px 0 0;"></clockDigital>
      <div id="divLink">
      <router-link class="routerLink" to="/">Home</router-link> |
      <router-link class="routerLink" to="/formulaire">Formulaire</router-link> |
      <router-link class="routerLink" to="/bitcoin">Crypto-monnaies</router-link> |
      <router-link class="routerLink" to="/clock">L'horloge</router-link> |
      </div>
      </header>
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

body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 
}

#header {
  background: #2c3e50;
}

#divLink {
  display: flex;
  justify-content: center;
}

.routerLink {
  display: inline;
  padding-bottom: 30px;
  color: #ffffff;
  margin-left: 30px;
  text-decoration: none;
  font-size: 1.2em;
}




</style>
