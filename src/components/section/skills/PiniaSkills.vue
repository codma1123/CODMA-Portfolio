<template>
  <div class="description">
    <Chip 
      type="Vue.js" 
      content="Vue 2"
      @click="openDialog"
    />크크
  </div>
</template>

<script setup>
import Chip from '../../SkillDialog'

const emit = defineEmits(['openDialog', 'onPopUp'])
const openDialog = e => emit('openDialog', e)

</script>

<style lang="scss" scoped>

</style>