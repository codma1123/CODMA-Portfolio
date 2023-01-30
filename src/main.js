import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import "@fontsource/poppins";

loadFonts()

const app = createApp(App)
app.directive('underline', el => {
  el.style.textDecorationLine = 'underline'
  el.style.textDecorationStyle = 'wavy'
  el.style.textDecorationColor = 'yellow'
  el.style.textDecorationThickness = '3px'
})
app.use(vuetify)
app.mount('#app')

