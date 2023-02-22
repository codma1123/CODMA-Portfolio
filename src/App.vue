<template>
  <v-app>
    <NavBar />
    <v-main>
      <MainContent />
    </v-main>
  </v-app>
</template>

<script setup>
import MainContent from './components/MainContent.vue'
import NavBar from './components/navbar/NavBar.vue'

</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Jua:400');
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR&display=swap');
body {
  font-family: 'IBM Plex Sans KR', sans-serif;
}
</style>


