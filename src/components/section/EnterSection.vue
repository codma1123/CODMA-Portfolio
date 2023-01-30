<template>
  <v-sheet 
    class="profile-container px-5 pt-15"
    height="90vh"    
  >

  <v-avatar size="250">
    <v-img src="../../public/codmaProfile.png" />
  </v-avatar>
  
  <div class="profile-description">
    주니어 프론트엔드 개발자 이준하
  </div>

  <div class="profile-description">
    <v-btn 
      variant="text" 
      icon="mdi:mdi-github"
      size="x-large" 
      @click="popUpPage"
    />
    <v-btn 
      variant="text"
      icon="fa-regular fa-envelope"
      size="x-large"          
    />   
  </div>  
</v-sheet>
</template>

<script setup>

const GITHUB_ADDRESS = 'https://github.com/codma1123'
const TARGET = "_blank"

const popUpPage = () => window.open(GITHUB_ADDRESS, TARGET)

</script>

<style lang="scss" scoped>
.profile-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.profile-description {
  display: flex;
  gap: .75rem;
  text-align: center;
  border-radius: 1rem;
  background-color: #212121;
  padding: 5px;
  z-index: 1;
  font-size: 25px;
}

</style>