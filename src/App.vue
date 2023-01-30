<template>
  <v-app>
    <NavBar />
    <v-main>
      <HelloWorld/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import NavBar from './components/navbar/NavBar.vue'

export default {
  name: 'App',

  components: {
    HelloWorld,
    NavBar
  },

  data: () => ({
    //
  }),
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Jua:400');

body {
  font-family: 'Jua', sans-serif;
}
</style>


