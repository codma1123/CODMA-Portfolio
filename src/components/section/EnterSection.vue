<template>
  <v-sheet 
    class="profile-sheet px-5 pt-15"
    height="90vh"    
  >

    <v-container class="profile-container">
      <!-- <v-avatar size="250">
        <v-img src="../../public/codmaProfile.png" />
      </v-avatar>       -->
      <div v-font-size="30">
        
      </div>
    </v-container>
  
  
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
.profile-sheet {
  position: relative;
  gap: 10px;
}
.profile-sheet::before {
  content: "";
  background-image: url('public/bg.png');
  background-repeat: no-repeat;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background-size: cover;
  opacity: .5;
}

.profile-container {
  display: flex;
  justify-content: center;
  gap: 50px;
}

.profile-sheet {
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