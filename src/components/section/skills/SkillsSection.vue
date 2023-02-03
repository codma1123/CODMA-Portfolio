<template>
  <v-sheet 
    id="Skills"
    class="text-center"
  >

    <v-card-title class="content-title flex-wrap">
      SKILLS      
    </v-card-title>    

    <v-card-subtitle v-font-size="20" class="mb-3">
      이미지를 클릭하여 상세한 내용을 살펴보세요.
    </v-card-subtitle>
    
    <v-container class="skills-container">
      <SkillBox 
        @openDialog="openDialog"
        :currentSkill="currentSkill" 
      />
    </v-container>
  
    <v-container class="mt-5" v-if="!mobile && currentSkill">
      <CurrentSkill 
        @openDialog="openDialog"
        :currentSkill="currentSkill" 
      />
    </v-container>

    <v-card-title class="content-title flex-wrap">
      TOOLS
    </v-card-title>
    
  </v-sheet>  
</template>

<script setup>
import { ref, onMounted } from 'vue'
import CurrentSkill from './currentSkill/CurrnetSkill.vue'
import { useDisplay } from 'vuetify/lib/framework.mjs';
import { useContstance } from '../../../hooks/constance';
import SkillBox from './currentSkill/SkillBox.vue';

const { mobile } = useDisplay()
const { skillContents } = useContstance()

const currentSkill = ref(null)

const openDialog = id => {
  const targetSkill = skillContents.find(skillContent => skillContent.id === id)
  
  currentSkill.value = targetSkill
  if (mobile.value) {
    dialog.value = true
  }    
}

onMounted(() => {
  currentSkill.value = skillContents.find(skill => skill.id === 'Vue.js')
})

</script>

<style lang="scss" >
.skills-current {
  display: flex;
  padding : 30px 30px 30px 0px;  
  position: relative;
  overflow: visible;
  .img {
    height: 500px;
    width: 500px;
  }

  .title {
    position: absolute;
    top: 30px;
    left: 0px;
    border: 5px solid white;
    
    margin-left: 20px;
    // border: 3px solid black;
    // border-radius: 1rem;;
    padding: 10px;
  }
}

.skills-container {    
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: space-around;
  border-radius: 1rem;
}

.skills-container .img {
  background-color: white;  
  opacity: .5;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 180px;
  max-width: 100%;
  cursor: pointer;
  transition: all .5s;  
}

.skills-container .img.active {
  transform: scale(1.15);
  opacity: 1;
}


</style>