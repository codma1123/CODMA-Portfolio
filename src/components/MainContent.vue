<template>
  <!-- <v-sheet 
    class="d-flex justify-center align-center"
    height="100vh" width="100%" color="dark" 
  >
    <v-container>
      <v-sheet 
        class="d-flex justify-center align-center"
        height="60vh" width="100%" color="dark"                
      >
        <span class="scroll-down" @mouseover="scrollMouseOver">
          scroll down & click!
        </span>
      </v-sheet>
    </v-container>
  </v-sheet> -->

  <EnterSection />


  <v-sheet     
    color="#181818"
    id="About me"
    class="text-center"
  >    
    <v-card-title class="content-title">
      ABOUT ME
    </v-card-title>
    
    <transition v-on:enter="enter">
      <div v-if="show" ref="aboutMeWrapper">
        <section>
          <trigger-observer @triggerFadeIn="fadeIn" />
          <v-container class="intro__about_me">            
            <v-avatar size="150">
              <v-img src="../../public/codmaProfile.png" />
            </v-avatar>

            <div class="d-flex align-center flex-wrap justify-center aboutMe-chips">

              <!-- 이름 -->
              <div class="aboutMe-chip" label>
                <div class="abomtMe-chip-label">이름</div>
                <div class="abomtMe-chip-description">이준하 | CODMA</div>
              </div>

              <!-- 생년월일 -->
              <div class="aboutMe-chip" label>
                <div class="abomtMe-chip-label">생년월일</div>
                <div class="abomtMe-chip-description">1996.11.29</div>
              </div>

              <!-- 메일 -->
              <div class="aboutMe-chip" label>
                <div class="abomtMe-chip-label">메일</div>
                <div class="abomtMe-chip-description email" @click="copyMail"> 
                  codma1123@naver.com                  
                </div>
              </div>

              <!-- 연락처 -->
              <div class="aboutMe-chip" label>
                <div class="abomtMe-chip-label">연락처</div>
                <div class="abomtMe-chip-description">010-9922-0335</div>
              </div>

              <!-- 거주지 -->
              <div class="aboutMe-chip" label>
                <div class="abomtMe-chip-label">거주지</div>
                <div class="abomtMe-chip-description">안산시 상록구</div>
              </div>

              <!-- 학적 -->
              <div class="aboutMe-chip" label>
                <div class="abomtMe-chip-label">학적</div>
                <div class="abomtMe-chip-description">한경대학교 컴퓨터공학과</div>
              </div>

              
            </div>
            <!-- <div class="intro__about_me-content content1">
              <v-icon icon="mdi:mdi-account" size="200" />              
              <v-list class="intro__about_me_myName">
                <v-list-item>
                </v-list-item>
                <v-list-item>
                </v-list-item>
              </v-list>
            </div>
            <div class="intro__about_me-content content2"></div>
            <div class="intro__about_me-content content3"></div> -->
          </v-container>
        </section>
      </div>
    </transition>
  </v-sheet>

  <v-sheet 
    id="Skills"
    class="text-center pb-15"
  >
    <v-card-title class="content-title flex-wrap">
      SKILLS      
    </v-card-title>
    <v-card-subtitle v-font-size="20" class="mb-10">
      이미지를 클릭하여 상세한 내용을 살펴보세요.
    </v-card-subtitle>

    <v-divider class="ml-10 mr-10 mt-5 mb-5"/>
<!-- 
    <v-container class="skill-container">
      <div class="skill-label">
        ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ
        ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ
      </div>
      <v-card color="white" height="300">
        ㅎㅇ
      </v-card>
    </v-container> -->
    
    <!-- <v-container class="mt-10 d-flex flex-wrap skills-container">
      <v-card 
        class="d-flex pt-3 pb-3 align-center"
        color="white" 
        rounded="xl"
        width="500"
        height="250"
      >        
        <v-img
          class="img"
          src="../../public/HTML5.svg"
        />
        <v-img
          class="img"
          src="../../public/CSS.svg"
        />
        <v-img
          class="img"
          src="../../public/HTML5.svg"
        />

      </v-card>
      
    </v-container> -->


    <v-card-title class="mt-10 font-weight-bold" v-font-size="70">
      TECHS
    </v-card-title>
    
    <v-container class="skills-container">      
      <v-img        
        v-for="skillContent in skillContents" 
        :class="['img', skillContent.id === currentSkill?.id ? 'active' : '']"        
        :id="skillContent.id" 
        :src="skillContent.src"
        @click.stop="openDialog(skillContent.id)"
      />            
    </v-container>

    <v-container class="mt-5" v-if="!mobile && currentSkill">
      <v-card 
        class="skills-current"
        color="white" 
        rounded="xl"
        height="400"
      >
        <div>
          <v-img :src="currentSkill.src" class="img"/>
        </div>
        <div class="description-container">
          <VueSkills 
            v-if="currentSkill.id === 'Vue.js'"
            @onPopUp="onPopUp"
            @openDialog="openDialog"
          />
          <PiniaSkills
            v-if="currentSkill.id === 'pinia'"
            @onPopUp="onPopUp"
            @openDialog="openDialog"
          />
        </div>
        <v-card
          elevation="0"
          v-font-size="50" class="title"
          rounded="xl"
          color="rgb(65, 184, 131)"
        >
          {{ currentSkill.id }}
        </v-card>
      </v-card>
    </v-container>

    <v-card-title class="content-title flex-wrap">
      TOOLS
    </v-card-title>
    
  </v-sheet>

  <v-sheet
    id="Projects"    
    class="text-center projects"    
  >
    <v-card-title class="content-title">
      PROJECTS
    </v-card-title>


    <!-- 프로젝트 DONDA-Desktop -->
    <v-card 
      class="ml-10 mr-10 mt-10 project-donda"
      elevation="0" 
      rounded="xl"
      color="rgb(38, 38, 38)"      
    >

      <v-img src="../../public/projects/title.png" class="project-title"/>

      <v-carousel 
        class="project-carousel"
        :show-arrows="false"
        hide-delimiter-background
        delimiter-icon="mdi:mdi-square"
      >
        <v-carousel-item class="carousel-item" src="../../public/projects/DONDA.png" />
        <v-carousel-item class="carousel-item" src="../../public/projects/search.png" />
        <v-carousel-item class="carousel-item" src="../../public/projects/eval.png" />
        <v-carousel-item class="carousel-item" src="../../public/projects/indicator.png" />
        <v-carousel-item class="carousel-item" src="../../public/projects/news.png" />
      </v-carousel>

      <v-container class="project-content-container">

        <!-- 개요 -->
        <v-card-title class="mt-10 project-patented">
          <v-icon icon="mdi:mdi-file-document-edit-outline"/>
          프로젝트 개요
        </v-card-title>  
        <v-card-text class="project-description">
          기업의 주가 데이터를 수집, 가공하여 다양한 기업에 관한 주가 정보를 제공하고,
          <span v-underline>사용자에게 주가가 저평가된 종목을 추천하여 보여주는 웹 서비스 입니다. </span>        
        </v-card-text>
  

        <!-- 개발 인원 -->
        <v-card-title class="project-patented">
          개발 인원
        </v-card-title>
        <v-card-text class="project-description">
          Front-End(1인), Back-End(2인)
        </v-card-text>

        <!-- 개발환경, 스택 -->
        <v-card-title class="project-patented">
          개발 환경
        </v-card-title>
        <v-card-text class="project-description">
          <v-icon 
            v-for="developmentEnvironmentIcon in developmentEnvironmentIcons" 
            :key="developmentEnvironmentIcon.id"
            :icon="developmentEnvironmentIcon.icon"
            class="mr-2"
            size="x-large"
          />          
        </v-card-text>

        <v-card-title class="project-patented">
          주요 사용 기술 스택
        </v-card-title>
        <v-card-text class="project-description d-flex justify-center flex-wrap mt-3">
          <v-chip v-for="dondaStack in dondaStacks" :key="dondaStack.skill" :color="dondaStack.color" class="ml-1" label size="x-large">
            {{ dondaStack.skill }}
          </v-chip>              
        </v-card-text>
  
        <div class="d-flex flex-wrap justify-center mt-10 text-left">
          <div class="mr-3" rounded="xl">
            <v-card-title class="project-patented mt-5 text-center"> 주요 기능 </v-card-title>
            <v-card-text class="project-description">
              <li>KOSPI, NASDAQ등 주요 시장의 현황을 보여줍니다. </li>
              <li>검색을 통해 원하는 기업에 대한 정보를 불러올 수 있습니다. </li>
              <li v-underline>주가가 상대적으로 저평가된 종목을 추천하여 보여줍니다. </li>
              <li v-underline>기업의 주가를 차트로 시각화하여 보여줍니다.</li>
              <li>주가가 상대적으로 저평가된 종목을 추천하여 보여줍니다. </li>
              <li>종목 검색을 통해 원하는 기업에 대한 정보를 불러올 수 있습니다. </li>
              <li>종목 관련 뉴스 소식을 보여줍니다.</li>
            </v-card-text>
          </div>          
        </div>

        <div class="d-flex flex-wrap justify-center mt-10 text-left">
          <div class="mr-3" rounded="xl">
            <v-card-title class="project-patented mt-5 text-center" @click.stop="dondaDialog = true"> 
              <span v-underline>개발 상세 및 후기</span>              
              <v-icon
                icon="mdi:mdi-cursor-default-click-outline" 
                class="ml-3"
              />
            </v-card-title>
          </div>          
        </div>

      </v-container>



      
        
            
      
    </v-card>
  </v-sheet>


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
  import { useDisplay } from 'vuetify/lib/framework.mjs';
  import AboueMeSection from '../components/section/AboueMeSection.vue'
  import EnterSection from '../components/section/EnterSection.vue'
  import TriggerObserver from './TriggerObserver.vue';  
  import VueSkills from './section/skills/VueSkills.vue';
  import PiniaSkills from './section/skills/PiniaSkills.vue';

  const email = 'codma1123@naver.com'

  const skillContents = ref([
    {
      id: 'HTML',
      src: '../../public/HTML5.svg',
      content: '웹사이트의 뼈대가 되는 마크업 언어입니다.'
    },
    {
      id: 'CSS',
      src: '../../public/CSS.svg',
      content: 'HTML과 같은 마크업 언어의 표현 방식을 지정해주는 언어입니다.',
    },
    {
      id: 'JavaScript',
      src: '../../public/JS.svg',    
      content: '웹 브라우저의 요소를 조작하는 스크립트형 프로그래밍 언어입니다.'
    },
    {
      id: 'TypeScript',
      src: '../../public/TS.svg',    
      content: 'JavaScript에 정적 타입을 명시하여 디버깅이나 에러등의 처리를 쉽게 할수 있게하는 JavaScript의 슈퍼셋 언어입니다.',
    },
    {
      id: 'Vue.js',
      src: '../../public/VUE.svg', 
      content: '컴포넌트를 활용한 SPA의 구현과, 동적인 웹페이지를 구성할 수 있는 JavaScript, TypsScript 기반의 프론트엔드 프레임워크입니다.'
    },
    {
      id: 'Vuex',
      src: '../../public/VUEX.png',    
      content: 'Vue.js에서 공통적인 상태(변수)를 효율적으로 관리하기위한 중앙 상태 저장소입니다.'
    },
    {
      id: 'pinia',
      src: '../../public/PINIA.svg',    
      content: 'Vuex에서 Muations를 제거하고, 스토어 접근 방식을 개선한 중앙 상태 저장소입니다. Vue3에 들어서 권장하고있는 상태 관리 방법입니다.'
    },
    {
      id: 'Vuetify',
      src: '../../public/VUETIFY.svg',
      content: 'Vue.js에서 활용 가능한 CSS 프레임워크입니다.'
    },    
  ])

  const dondaStacks = [
    {
      skill: 'Vue.js',
      color: 'green-lighten-2'
    },
    {
      skill: 'TypeScript',
      color: 'blue-lighten-1'
    },
    {
      skill: 'Vuetify',
      color: 'blue-lighten-3'
    },
    {
      skill: 'Vuex',
      color: 'green-lighten-1'
    },
    {
      skill: 'chart.js',
      color: 'red-lighten-4'
    },
    {
      skill: 'Figma',
      color: 'red-lighten-2'
    },
  ]

  const developmentEnvironmentIcons = [
    {
      id: 'git',
      icon: 'mdi:mdi-git'
    },
    {
      id: 'github',
      icon: 'mdi:mdi-github'
    },
    {
      id: 'docker',
      icon: 'mdi:mdi-docker'
    }
  ]

  const skillComponentMap = {
    'Vue.js': VueSkills
  }

  const enterDialog = ref(true)
  const dondaDialog = ref(false)

  const copyComplete = ref(false)
  const show = ref(false)
  const aboutMeWrapper = ref(null)
  const dialog = ref(false)
  const currentSkill = ref(null)
  const direct = () => window.open('https://github.com/codma1123', "_blank")
  const { mobile } = useDisplay()
  
  

  // const enter = el => el.style.opacity = 0
  // const fadeIn = () => aboutMeWrapper.value.style = "transition: opacity 3s"
  // const scrollMouseOver = e => {
  //   e.target.style.transform = "translate(0, 30vh)"
  //   e.target.style.opacity = 0
  // }

  const copyMail = () => navigator.clipboard.writeText(email).then(() => copyComplete.value = true)

  const openDialog = id => {
    const targetSkill = skillContents.value.find(skillContent => skillContent.id === id)
    currentSkill.value = targetSkill
    if (mobile.value) {
      dialog.value = true
    }    
  }

  const getSkillImgClass = id => {
    return id === currentSkill?.value.id ? 'active' : ''
  }

  const chipClickHandler = id => {
    const targetSkill = skillContents.value.find(skillContent => skillContent.id === id)
    currentSkill.value = targetSkill
  }

  const onPopUp = id => {
    console.log(id)
  }


      
  onMounted(() => {
    show.value = true
    currentSkill.value = skillContents.value.find(skill => skill.id === 'Vue.js')
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
  flex-wrap:wrap;
  border-radius: 1rem;
}

.skills-container .img {
  background-color: white;  
  opacity: .5;
  border-radius: 20px;
  display: block;
  height: 200px;
  width: 10%;
  max-width: 100%;
  cursor: pointer;
  transition: all .5s;
}

.skills-container .img.active {
  transform: scale(1.15);
  opacity: 1;
}


.profile-links {

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

}
</style>
