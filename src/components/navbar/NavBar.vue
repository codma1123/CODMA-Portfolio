<template>  
  <v-app-bar
    color="primary-"
    density="compact"
    height="100"    
    max-height="auto"
    flat    
    ref="appBar"
  >
    <!-- <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template> -->

    <!-- <v-app-bar-title class="text-h4 font-weight-bold ml-10">CODMA's PortFolio</v-app-bar-title> -->
    
    <template v-slot:append>
      <div 
        v-if="isMenuIcon" 
        class="d-flex"        
      >
        <v-btn 
          v-for="(menu, i) in menus" :key="i" 
          variant="plain"
          @click="[scroll(menu.text), expandMenu = !expandMenu]"
        >
          <template v-slot:prepend>
            <v-icon :icon="menu.icon" />
          </template>    
          {{ menu.text }}
        </v-btn>        
      </div>
      <v-btn 
        v-else 
        class="pb-1"        
        icon
        @click="expandMenu = !expandMenu"
        @blur="expandMenu = false"
      >
        <v-icon size="30" icon="fa-solid fa-bars" />
      </v-btn>
    </template>
  </v-app-bar>
  <Transition>
    <v-card           
      v-if="expandMenu"
      class="navbar__menu"
      flat  
      position="fixed"
      width="100%" 
    >
      <v-list class="navbar__menu__items">
        <v-list-item                
          v-for="(menu, i) in menus" :key="i"
          class="navbar__menu__item"
          @click="scroll(menu.text)"
        >
          <template v-slot:prepend>
            <v-icon :icon="menu.icon" />
          </template>    
          <span>{{ menu.text }}</span>                                
        </v-list-item>  
      </v-list>
    </v-card>
  </Transition>
</template>

<script setup>
  import {  ref, watch, onMounted, onUnmounted } from 'vue';
  import { useDisplay } from 'vuetify/lib/framework.mjs';

  const { mobile } = useDisplay()
  const scrollHeight = ref(0)
  

  watch(scrollHeight, v => {
    if(v) appBar.value.$el.style.opacity = 1
    else appBar.value.$el.style.opacity = 1
    
  })

  const appBar = ref(null)
  const isMenuIcon = ref(false)
  const expandMenu = ref(false)
  const menus = [
    {
      'icon': 'mdi:mdi-account',
      'text': 'About me',    
    },
    {
      'icon': 'fa-solid fa-toolbox',        
      'text': 'Skills',    
    },
    {
      'icon': 'fa-solid fa-window-maximize',
      'text': 'Projects',    
    } 
  ]

  watch(mobile, (_, newVal) => {
    isMenuIcon.value = newVal
    if(newVal) expandMenu.value = false
  })
  
  const scroll = content => document.getElementById(content)?.scrollIntoView({behavior: 'smooth'})
  
  const updateScroll = () => scrollHeight.value = window.scrollY || document.documentElement.scrollTop
  

  onMounted(() => {
    isMenuIcon.value = !mobile.value
    window.addEventListener('scroll', updateScroll)
  })

  onUnmounted(() => window.removeEventListener('scroll', updateScroll))
  
</script>

<style scoped>

.navbar__menu {
  z-index: 3; 
  margin-top: 75px;     
}

.navbar__menu__items {
  display: flex;
  flex-direction:column;
  font-weight: bold;
  color: grey;  
  transform: color 1s ease;  
}


.navbar__menu__item {
  padding-left: 30px;    
  display: flex;
  justify-content: start;  
  align-items: center;

}

.navbar__menu__item:hover {
  color: white;
}

.v-enter-active,
.v-leave-active {
  transition: all .4s ease-in-out ;
}

.v-enter-from,
.v-leave-to {  
  transform: translateY(-120px);
}
</style>

