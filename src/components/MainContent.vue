<template>
  <!-- <v-sheet 
    class="d-flex justify-center align-center"
    height="100vh" width="100%" color="dark" 
  >
    <v-container>
      <v-sheet 
        class="d-flex justify-center aligPn-center"
        height="60vh" width="100%" color="dark"                
      >
        <span class="scroll-down" @mouseover="scrollMouseOver">
          scroll down & click!
        </span>
      </v-sheet>
    </v-container>
  </v-sheet> -->

  <EnterSection />

  <AboueMeSection />

  <SkillsSection />

  <ProjectsSection />



  <!-- <v-sheet     
    width="100%"
    color="#181818"
    id="Skills"
    class="text-center"
  >    
    <v-card-title class="content-title">
      # Skills 
    </v-card-title>
    
    <transition v-on:enter="enter">
      <div v-if="show" ref="aboutMeWrapper">
        <section>
          <trigger-observer @triggerFadeIn="fadeIn" />
          <v-container class="intro__about_me">            
            <div class="intro__about_me-content content1">
              <v-icon icon="mdi:mdi-account" size="200" />              
              <v-list class="intro__about_me_myName">
                <v-list-item>
                </v-list-item>
                <v-list-item>
                </v-list-item>
              </v-list>
            </div>
            <div class="intro__about_me-content content2"></div>
            <div class="intro__about_me-content content3"></div>
          </v-container>
        </section>
      </div>
    </transition>
  </v-sheet> -->

  <v-dialog v-model="dialog" max-width="500">
    <v-card class="px-10 pb-10 text-center" rounded="xl">
      <v-card-title class="dialog-title">
        {{ currentSkill.id }}
      </v-card-title>

      <v-img :src="currentSkill.src" height="200" class="mt-5"/>        

      <div class="mt-3 dialog-content">
        {{ currentSkill.content }}
      </div>
      <v-divider v-if="currentSkill.etc"/>
      <div class="mt-3 dialog-content">
        {{ currentSkill.etc }}
      </div>
    </v-card>
    
  </v-dialog>

  <!-- <v-dialog v-model="enterDialog" max-width="500">
    <v-card width="500" height="300" rounded="xl" class="text-center d-flex align-center">          
      <v-icon icon="mdi:mdi-sign-caution" size="200"/> 
      <v-card-text>
        현재 작성중인 포트폴리오입니다. 아직 담지못한 내용이 많아요!
      </v-card-text>
    </v-card>
  </v-dialog> -->

  <v-dialog 
    v-model="dondaDialog" 
    transition="dialog-bottom-transition" 
    fullscreen
    :scrim="false"
  >
    <v-card>
      <v-card-title v-font-size="50">
        DONDA~
      </v-card-title>
      
      <v-btn @click="dondaDialog = false">
        닫기
      </v-btn>
    </v-card>
  </v-dialog>
</template>

<script setup>
  import { onMounted, ref } from 'vue';
  import AboueMeSection from '../components/section/AboueMeSection.vue'
  import EnterSection from '../components/section/EnterSection.vue'
  import SkillsSection from './section/skills/SkillsSection.vue';
  import ProjectsSection from './section/projectsSection/ProjectsSection.vue';


  const dondaDialog = ref(false)
  const show = ref(false)
  const dialog = ref(false)
  
  // const enter = el => el.style.opacity = 0
  // const fadeIn = () => aboutMeWrapper.value.style = "transition: opacity 3s"
  // const scrollMouseOver = e => {
  //   e.target.style.transform = "translate(0, 30vh)"
  //   e.target.style.opacity = 0
  // }

  onMounted(() => {
    show.value = true
  })


</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Jua:400');


.profile-divider {
  width: 300px;;
  height: 10px;
  background: brown;
}

.skills-container {    
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: space-around;
  border-radius: 1rem;
}

.skills-container .img {
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

.skills-container .img.active {
  transform: scale(1.15);
  opacity: 1;
}


.content-title {
  font-size: 70px;
  font-weight:bold;
  margin-left: 10px;
  padding-top: 105px;
}

.scroll-down {
  opacity: 0.9;
  font-weight: bold;
  font-size: 20px;
  transition: all 1s ease-in-out;
}


.intro__about_me {
  /* display: grid; */
  text-align: center;
  padding-bottom: 80px;
  /* grid-template-columns: repeat(3, 1fr);
  padding: 1rem;  
  padding-bottom: 130px;
  grid-gap: 2rem;
  grid-auto-rows: 200px;
  grid-template-areas:
    'a a b'
    'c c c'
    'c c c' */
}

.aboutMe-chips {
  margin-top: 50px;
  gap: 100px;
}

.aboutMe-chip {
  text-align: center;
}

.abomtMe-chip-label {
  font-size: 15px;
  opacity: .7;
}

.abomtMe-chip-description {
  font-size: 30px;
  min-width: 450px;
  opacity: .8;  
}
.abomtMe-chip-description:hover {
  font-size: 30px;
  opacity: 1;
}

.abomtMe-chip-description.email {
  cursor: pointer;
}


.projects {  
  padding: 100px;
  background-color: rgb(50, 202, 134);
}

.project-donda {
  background-image: url('../../public/projects/donda-bg.png');
  background-repeat: no-repeat;
  background-size: 650px 650px;
  background-position: -10% 800px;
}

.project-title {
  margin-top: 20px;
  font-size: 30px;
  height: 200px;
  padding: 20px;
  margin-bottom: 20px;
}


.project-carousel {
  margin: auto;
  height: 500px !important;
  overflow: visible;
  width: 75%;
}


.project-description {
  line-height: 30px !important;
  font-size: 20px;
}

.project-description li {
  margin-top: 10px;
}

.project-patented {
  margin-top: 20px;
  padding-top: 20px;
  font-size: 30px;
  cursor: pointer;  
}

.project-patented.after-review:hover {
  transition: .5s all ease-in-out;
}
.project-patented.after-review:hover {
  transform: scale(1.2);
}


.project-content-container {
  max-width: 1100px;
}





@media screen and (max-width: 600px) {

  ::-webkit-scrollbar {
    display: none;
  }

  .intro__about_me {    
    padding-left: 2rem;
    padding-right: 2rem;
    grid-auto-rows: 240px;
    grid-template-areas:
      'a a a'
      'b b b'
      'c c c'
      'c c c'
  }

  .skills-container .img {    
    width: 35%;
  }
    
  .projects {  
    padding: 10px;
  }

  .project-donda {
    background-image: none;
        
  }

}

.intro__about_me .intro__about_me-content {
  background-color:black;
  border-radius: 20px;
  display: flex;
  align-items: center;
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

.intro__about_me_myName {
  background-color:black;
}

.dialog-title {
  padding-top: 20px;
  font-size: 50px;
}

.dialog-content {
  font-size: 20px;
}

.carousel-item {
  bottom: 50px;
}


.skill-container {
  position: relative;
}


.skill-label {
  position: absolute;
  left: 50%;
  color: black;
  z-index: 10;
}

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
</style>
