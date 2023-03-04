<template>
  <v-card 
    class="project-donda"
    elevation="0"
    rounded="xl"
    color="rgb(38, 38, 38)"
  >
    <v-img 
      src="public/projects/title.png"
      class="project-title"
    />

    <div class="project-content-area">
      <div>
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
            @click="openImgDialog(dondaCarouselImage.id)"
          />                            
        </v-carousel>
        <div class="mt-5">
          이미지를 클릭하여 확대할 수 있습니다.
        </div>
      </div>

      <v-divider vertical class="divider"/>

      <v-container class="project-content-description-container">

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
          주요 사용 기술
        </v-card-title>
        <v-card-text class="project-description d-flex justify-center flex-wrap mt-3">
          <v-chip v-for="dondaStack in dondaStacks" :key="dondaStack.skill" :color="dondaStack.color" class="ml-1 mt-1" label size="x-large">
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
    </div>
  </v-card>


  <!-- 프로젝트 상세 다이어로그 -->
  <v-dialog 
    v-model="dondaDialog" 
    transition="dialog-bottom-transition" 
    :scrim="false"
    max-width="80%"
    height="500"
  >
    <v-card height="100%">
      <v-card-title v-font-size="50">
        DONDA~
      </v-card-title>
      
      <v-card-actions>
        <v-btn @click="dondaDialog = false">
          닫기
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>


  <!-- 이미지 다이어로그 -->
  <v-dialog 
    v-model="imgDialog" 
    max-width="80%"
    height="80%"
  >
    <v-sheet height="100%" @click.prevent="imgDialog = false">
      <v-img :src="findDialogImgUrl(currentDialog)" />
    </v-sheet>
  </v-dialog>
</template>

<script setup>
  import { ref } from 'vue'

  const dondaCarouselImages = [
    {
      id: 'donda',
      src: "public/projects/DONDA.png"
    },
    {
      id: 'search',
      src: "public/projects/search.png"      
    },
    {
      id: 'eval',
      src: "public/projects/eval.png"
    },
    {
      id: 'indicator',
      src: "public/projects/indicator.png"
    },
    {
      id: 'news',
      src: "public/projects/news.png"
    }
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
  ]

  // dialog
  const currentDialog = ref(null)
  const imgDialog = ref(false)
  const dondaDialog = ref(false)

  const openImgDialog = id => {    
    currentDialog.value = id
    imgDialog.value = true
  }
  const findDialogImgUrl = id => dondaCarouselImages.find(img => img.id === id).src


</script>

<style lang="scss" scoped>
.project-donda {
  margin-top: 50px;
  background-image: url('../../public/projects/donda-bg.png');
  background-repeat: no-repeat;
  background-size: 650px 650px;
  background-position: -10% 800px;  
}

.project-title {
  margin-top: 20px;
  font-size: 30px;
  height: 300px;
  padding: 20px;
  margin-bottom: 20px;
}

.project-content-area {
  display: flex;
  align-items: start;
  justify-content: center; 
  flex-wrap: wrap;  
  padding-left: 150px;
  padding-right: 100px;
}

.project-carousel {
  width: 600px;
  cursor: pointer;
}

@media(max-width: 600px) {
  .projects { padding: 1rem; }

  .project-donda { background-image: none; }
  
  .area { display: block; }
  .divider { display: none; }
}

@media(max-width: 1800px) {
  .divider { display: none; }
}

.divider { margin-left: 150px; } 

.project-content-description-container { width: 800px; }

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

</style>