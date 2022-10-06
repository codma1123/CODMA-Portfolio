<template>
  <v-sheet 
    class="d-flex justify-center align-center"
    height="800" width="100%" color="primary" 
  >
    <v-container>
      <v-sheet 
        class="d-flex justify-center align-center"
        height="700" width="100%" color="primary-darken"        
      >
        
      </v-sheet>
    </v-container>
  </v-sheet>

  <v-sheet 
    id="About me"
    width="100%" color="primary-lighten"    
  >    
    <transition v-on:enter="enter">
      <div v-if="show" ref="aboutMeWrapper">
        <section>
          <trigger-observer @triggerFadeIn="fadeIn" />
          <v-container class="intro__about_me">            
            <div class="intro__about_me-content content1"></div>
            <div class="intro__about_me-content content2"></div>
            <div class="intro__about_me-content content3"></div>
          </v-container>
        </section>
      </div>
    </transition>
  </v-sheet>

  <v-sheet height="1000">

  </v-sheet>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import TriggerObserver from './TriggerObserver.vue';

const show = ref(false)
const aboutMeWrapper = ref(null)

function enter(el) {
  console.log('zzz')
  el.style.opacity = 0;
} 

function fadeIn() {
  aboutMeWrapper.value.style = "transition: opacity 1s"
}

onMounted(() => show.value = true)


</script>

<style scoped>
.intro__about_me {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 1rem;
  padding-top: 150px;
  padding-bottom: 150px;
  grid-gap: 2rem;
  grid-auto-rows: 220px;
  grid-template-areas:
    'b c c'
    'a a a'
    'a a a'
}

@media screen and (max-width: 600px) {
  .intro__about_me {    
    padding-left: 2rem;
    padding-right: 2rem;
    grid-auto-rows: 240px;
    grid-template-areas:
      'b b b'
      'c c c'
      'a a a'
      'a a a'
  }
}

.intro__about_me .intro__about_me-content {
  background-color:blanchedalmond;
  border-radius: 20px;
}

.content1 {
  grid-area: a;
}
.content2 {
  grid-area: b;
}

.content3 {
  grid-area: c;
}
</style>
