<template>
  <v-sheet
    id="Projects"
    class="text-center projects"
  >
    <v-card-title class="content-title">
      PROJECTS
    </v-card-title>

    
    <v-card 
      class="ml-10 mr-10 mt-10 project-donda"
      elevation="0"
      rounded="xl"
      color="rgb(38, 38, 38)"
    >
      <v-img 
        src="../../public/projects/title.png"
        class="project.title"
      />

      <v-carousel
        class="project-carousel"
        :show-arrows="false"
        hide-delimiter-background
        delimiter-icon="mdi:mdi-square"
      >
        <v-carousel-item 
          v-for="dondaCarouselImage in dondaCarouselImages"
          :key="dondaCarouselImage.id"
          :src="dondaCarouselImage.src"
        />                  
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
</template>

<script setup>
import { ref } from 'vue'
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

  const dondaDialog = ref(false)

  const dondaCarouselImages = [
    {
      id: 'donda',
      src: "../../public/projects/DONDA.png"
    },
    {
      id: 'search',
      src: "../../public/projects/search.png"      
    },
    {
      id: 'eval',
      src: "../../public/projects/eval.png"
    },
    {
      id: 'indicator',
      src: "../../public/projects/indicator.png"
    },
    {
      id: 'news',
      src: "../../public/projects/news.png"
    }
  ]

</script>

<style lang="scss" scoped>
.projects {  
  padding: 100px;
  background-color: rgb(50, 202, 134);
}


</style>