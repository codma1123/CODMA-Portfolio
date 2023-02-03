<script setup>
  import { useContstance } from '../../../../hooks/constance'

  const { skillContents } = useContstance()
  const { currentSkill } = defineProps({ currentSkill: Object })
  const emit = defineEmits(['openDialog'])
</script>

<template>
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
      @click.stop="emit('openDialog', skillContent.id)"
    />                    
  </div>
</template>



