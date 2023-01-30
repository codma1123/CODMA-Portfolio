<template>
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
</template>

<script setup>
  import { onMounted } from 'vue'
  import TriggerObserver from '../TriggerObserver.vue';

  const EMAIL = 'codma1123@naver.com'

  const show = ref(false)
  const copyComplete = ref(false)

  const copyMail = () => navigator.clipboard.writeText(EMAIL).then(() => copyComplete.value = true)      
  

  onMounted(() => show.value = true)


</script>

<style lang="scss" scoped>

</style>