<template>
  <div class="description">
    <Chip 
      type="Vue.js" 
      content="Vue 3"
      @click="openDialog"
    /> 에서 
    <Chip 
      type="JavaScript"
      @click="openDialog"
    />
      와
    <Chip       
      type="TypeScript"
      @click="openDialog"
    /> 기반의 
    <Chip
      type="pinia"
     /> 스토어를 구성해본 경험이 있습니다.
  </div>

  <div class="description">
    <Chip content="option"/>
    스타일과
    <Chip content="composition api"/>
    스타일로 
    <Chip type="pinia"/>
    스토어를 작성한 경험이 있습니다.    
  </div>

  <div class="description">
    <Chip type="Vuex" />
    로 작성한 스토어를 
    <Chip type="pinia"/>
    로 마이그레이션한 경험이 있습니다.
  </div>

  <div class="description">
    비동기적인 스토어 상태를 다룰 수 있습니다.
  </div>
</template>

<script setup>
import Chip from '../../../SkillDialog'

const emit = defineEmits(['openDialog', 'onPopUp'])
const openDialog = e => emit('openDialog', e)

</script>

<style lang="scss" scoped>
.description {
  border-radius: 1rem;
  padding: .75rem;    
  text-align: start;
  font-size: 30px;
  align-items: center;
  gap: 10px;

  .Chip {
    transition: all .3s;
  }

  .Chip:hover {
    transform: scale(1.1);
  }
}
</style>