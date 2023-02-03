<template>
  <div 
    class="description" 
    ref="description"
    @v-scroll="scroll"
  >
    <Chip 
      type="Vue.js" 
      content="Vue 2" 
      @click="openDialog"
    />
    <Chip
      class="ml-3"
      type="Vue.js"
      content="Vue 3"
      @click="openDialog"
    />            
    을
    <Chip 
      type="TypeScript" 
      @click="openDialog"
    />
    로 개발한 경험이 있습니다.
  </div>

  <div class="description">
    <Chip
      type="Vue.js"
      content="Vue 2"
      @click="openDialog"
    />을
    <Chip 
      content="Class Component" 
      @popUp="popUp"
    />
    스타일로 작성한 경험이 있습니다.  
  </div>

  <div class="description">
    <Chip
      type="Vue.js"
      content="Vue 3"
    />을
    <Chip content="Composition API"/>,
    <Chip content="Composition API setup"/>
    스타일로 작성한 경험이 있습니다.
  </div>

  <div class="description">            
    <Chip 
      type="Vuex"
      @click="openDialog"
    />
    <Chip 
      class="ml-3"
      type="pinia" 
      @click="openDialog"
    />
    와 같은 상태관리 라이브러리를 사용합니다.
  </div>          

  <div class="description">            
    <Chip
      type="Vue.js" 
      content="Vue 2" 
      @click="openDialog"
    /> 버전에서 작성된 프로젝트를
    <Chip
      type="Vue.js"
      content="Vue 3"
      @click="openDialog"
    /> 으로 마이그레이션 할 수 있습니다.
  </div>

  <div class="description">            
    <Chip content="Custom Directive" />,
    <Chip content="h() Render Function" />
    <span>과 같이 재사용성을 위한 </span>
    <Chip type="Vue.js" />의 다양한 기능들을 활용하여 재사용성을 높이기위해 노력합니다.
  </div>    
</template>

<script setup>

import { ref } from 'vue'
import Chip from '../../../SkillDialog'

const emit = defineEmits(['openDialog', 'onPopUp'])

const openDialog = e => emit('openDialog', e)
const popUp = e => emit('onPopUp', e)
const description = ref(null)

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