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

  <v-sheet 
    class="px-5 pt-15 d-flex align-center justify-center flex-column profile-container"
    height="90vh"    
  >

    <v-avatar size="250">
      <v-img src="/public/codmaProfile.png" />
    </v-avatar>
    
    <div class="profile-description">
      주니어 프론트엔드 개발자 이준하
    </div>

    <div class="profile-description">
      <v-btn variant="text" icon="mdi:mdi-github" size="x-large" />
      <v-btn variant="text" icon="fa-regular fa-envelope" size="x-large" />   
    </div>
    
  </v-sheet>

  <v-sheet     
    width="100%"
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
              <v-img src="/public/codmaProfile.png" />
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

    <div class="skills-container">
      <v-img 
        class="img"
        v-for="skillContent in skillContents" 
        :id="skillContent.id" 
        :src="skillContent.src"
        @click.stop="openDialog(skillContent.id)"
      />
    </div>
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
        hide-delimiters 
        class="project-carousel"
        show-arrows="hover"
      >
        <v-carousel-item src="../../public/projects/DONDA.png" />
        <v-carousel-item src="../../public/projects/search.png" />
        <v-carousel-item src="../../public/projects/eval.png" />
        <v-carousel-item src="../../public/projects/indicator.png" />
        <v-carousel-item src="../../public/projects/news.png" />
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
          <v-card class="mr-3" rounded="xl">
            <v-card-title class="project-patented mt-5 text-center"> 개발 후기 </v-card-title>
            <v-card-text class="project-description">
              <li>KOSPI, NASDAQ등 주요 시장의 현황을 보여줍니다. </li>
              <li>검색을 통해 원하는 기업에 대한 정보를 불러올 수 있습니다. </li>
              <li v-underline>주가가 상대적으로 저평가된 종목을 추천하여 보여줍니다. </li>
              <li v-underline>기업의 주가를 차트로 시각화하여 보여줍니다.</li>
              <li>주가가 상대적으로 저평가된 종목을 추천하여 보여줍니다. </li>
              <li>종목 검색을 통해 원하는 기업에 대한 정보를 불러올 수 있습니다. </li>
              <li>종목 관련 뉴스 소식을 보여줍니다.</li>
              <li></li>
            </v-card-text>
          </v-card>          
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

  <v-sheet height="1000">

  </v-sheet>
</template>

<script setup>
  import { onMounted, ref } from 'vue';
  import TriggerObserver from './TriggerObserver.vue';
  import SkillDialog from '../components/SkillDialog'

  const email = 'codma1123@naver.com'

  const skillContents = [
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
  ]

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

  const copyComplete = ref(false)
  const show = ref(false)
  const aboutMeWrapper = ref(null)
  const dialog = ref(false)
  const currentId = ref('')
  const currentSkill = ref(null)

  const enter = el => el.style.opacity = 0
  const fadeIn = () => aboutMeWrapper.value.style = "transition: opacity 3s"
  const scrollMouseOver = e => {
    e.target.style.transform = "translate(0, 30vh)"
    e.target.style.opacity = 0
  }

  const copyMail = () => navigator.clipboard.writeText(email).then(() => copyComplete.value = true)

  const openDialog = id => {
    currentSkill.value = skillContents.find(skillContent => skillContent.id === id)    
    dialog.value = true
  }


      
  onMounted(() => show.value = true)


</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Jua:400');

.profile-container {
  position: relative;
  gap: 10px;
}
.profile-container::before {
  content: "";
  background-image: url('../../public/bg.png');
  background-repeat: no-repeat;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background-size: cover;
  opacity: .5;
}

.profile-divider {
  width: 300px;;
  height: 10px;
  background: brown;
}

.skills-container {
  margin-left: 100px;
  margin-right: 100px;
  padding: 30px;  
  margin-top: 30px;
  display: flex;
  gap: 20px;
  flex-wrap:wrap;
  background-color: white;
  border-radius: 1rem;
}

.skills-container .img {
  display: block;
  height: 200px;
  width: 21%;
  cursor: pointer;
  transition: all .5s;
}
.skills-container .img:hover {
  transform: scale(1.15);
}

.profile-description {
  display: flex;
  gap: .75rem;
  text-align: center;
  border-radius: 1rem;
  background-color: #212121;
  padding: 5px;
  z-index: 1;
  font-size: 25px;
}

.profile-links {

}

.content-title {
  font-size: 50px;
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
}


.project-carousel {
  margin: auto;
  height: 500px !important;
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
}

.project-content-container {
  max-width: 1100px;
}





@media screen and (max-width: 600px) {
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
    width: 44%;
  }

  .skills-container {
    margin-left: 20px;
    margin-right: 20px;
  }
  
  .projects {  
    padding: 10px;
  }

  .project-donda {
    background-image: none;
    background-size: 300px 300px;
    
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
</style>
