<template>
  <v-sheet
    id="Projects"
    class="text-center projects"
  >
    <v-card-title class="content-title">
      PROJECTS
    </v-card-title> 

    <ProjectDonda />    
  </v-sheet>


  
</template>

<script setup>
import { ref } from 'vue'
import ProjectDonda from './projects/ProjectDonda.vue';    
</script>

<style lang="scss" scoped>
.projects {  
  padding: 30px;
  background-color: rgb(50, 202, 134);
}
</style>