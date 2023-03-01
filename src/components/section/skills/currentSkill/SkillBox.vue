<script setup>
  import { useContstance } from '../../../../hooks/constance'

  const { skillContents } = useContstance()
  const { currentSkill } = defineProps({ currentSkill: Object })
  const emit = defineEmits(['setId'])
</script>

<template>    
  <v-container class="skills-container">
    <div 
      v-for="skillContent in skillContents"
      :key="skillContent.id"
      class="skill" 
    >             
      <v-img                
        :class="['img', skillContent.id === currentSkill?.id ? 'active' : '']"
        :src="skillContent.src"
        @click.stop="emit('setId', skillContent.id)"
      />  
    </div>
  </v-container>
</template>

<style lang="scss" scoped>


.skills-container {    
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;
  border-radius: 1rem;
  padding: 30px;
}

.skill {
  position: relative;
}

.img {
  background-color: white;  
  opacity: .5;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 180px;
  cursor: pointer;
  transition: all .5s;  
}

.img.active {
  transform: scale(1.15);
  opacity: 1;
}

@media(max-width: 500px) {
  .img {
    width: 100% !important;
  }

  .skill {
    width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;

  }
  
}
</style>



