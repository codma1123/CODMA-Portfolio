const useContstance = () => {
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
    }
  ]

  return {
    skillContents
  }
}

export {
  useContstance
}