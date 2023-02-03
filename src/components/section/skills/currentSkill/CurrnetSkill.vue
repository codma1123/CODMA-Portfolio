<template>
  <v-container class="mt-5">
    <v-card 
      class="skills-current"
      color="white" 
      elevation="0"
      rounded="xl"
      height="400"
    >
      <div>
        <v-img :src="props.currentSkill.src" class="img"/>
      </div>
      <div class="description-container">
        <VueSkills 
          v-if="props.currentSkill.id === 'Vue.js'"
          @onPopUp="onPopUp"
          @openDialog="setId"
        />
        <PiniaSkills
          v-if="props.currentSkill.id === 'pinia'"
          @onPopUp="onPopUp"
          @openDialog="setId"
        />      
      </div>
      <v-card
        elevation="0"
        class="title"
        v-font-size="50" 
        rounded="xl"
        color="rgb(65, 184, 131)"
      >
        {{ props.currentSkill.id }}
      </v-card>
    </v-card>
  </v-container>
</template>

<script setup>
import VueSkills from './VueSkills.vue';
import PiniaSkills from './PiniaSkills.vue';

const props = defineProps({ currentSkill: Object })
const emit = defineEmits(['setId'])
const setId = e => emit('setId', e)

</script>

<style lang="scss" scoped>
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

.description-container {
  flex-grow: 1;
  display: flex;
  gap: 10px;
  flex-direction: column;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 15px;
    background: white;
  }

    &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #ced4da;
    
    &:hover {
      background-color: #adb5bd;
    }
  }
}
</style>