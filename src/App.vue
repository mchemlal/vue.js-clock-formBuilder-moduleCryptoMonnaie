<template>
  <div id="app">
      <router-link to="/">Home</router-link> |
      <router-link to="/formulaire">Formulaire</router-link> |
<<<<<<< HEAD
      <router-link to="/todo">Todo</router-link>
=======
      <router-link to="/bitcoin">Crypto-monnaies</router-link>
>>>>>>> 86275df40ec3ddc8b6d4ab53d5d8f9718f8753cc
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
   
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
