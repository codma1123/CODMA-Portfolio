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
    >        
      <v-chip class="mb-5" v-font-size="30" label>
        {{ skillContent.id }}
      </v-chip>
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
  justify-content: space-around;
  border-radius: 1rem;
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
  max-width: 100%;
  cursor: pointer;
  transition: all .5s;  
}

.img.active {
  transform: scale(1.15);
  opacity: 1;
}
</style>



