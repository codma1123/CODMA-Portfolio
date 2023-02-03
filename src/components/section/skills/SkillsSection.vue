<template>
  <v-sheet 
    id="Skills"
    class="text-center mb-15"
  >

    <v-card-title class="content-title flex-wrap">
      SKILLS      
    </v-card-title>    

    <v-card-subtitle v-font-size="20" class="mb-3">
      이미지를 클릭하여 상세한 내용을 살펴보세요.
    </v-card-subtitle>
    
    <SkillBox 
      @setId="setId"
      :currentSkill="currentSkill" 
    />

    <CurrentSkill 
      v-if="!mobile && currentSkill"
      @setId="setId"
      :currentSkill="currentSkill" 
    />

  </v-sheet>  
</template>

<script setup>
import { ref, computed } from 'vue'
import { useDisplay } from 'vuetify/lib/framework.mjs';
import { useContstance } from '../../../hooks/constance';

import CurrentSkill from './currentSkill/CurrnetSkill.vue'
import SkillBox from './currentSkill/SkillBox.vue';

const { mobile } = useDisplay()
const { skillContents } = useContstance()
const INIT_ID = 'Vue.js'

const currentId = ref(INIT_ID)
const currentSkill = computed(() => skillContents.find(skillContent => skillContent.id === currentId.value))

const setId = id => currentId.value = id 
  
</script>
