<template>
  <div ref="triggerDiv">_</div>
</template>

<script setup>
import { onMounted, ref, defineEmits } from 'vue';


const triggerDiv = ref(null)
const observer = ref(null)
const option = ref({
  root: null,
  threshould: 1
})

const emit = defineEmits(['triggerFadeIn'])

function handleIntersect(target) {
  if(target.isIntersecting) emit('triggerFadeIn')
}

onMounted(() => {
  observer.value = new IntersectionObserver(entries => {
    handleIntersect(entries[0])
  }, option)
  observer.value.observe(triggerDiv.value)
})
</script>

<style lang="scss" scoped>
div {
  opacity: 0
}
</style>