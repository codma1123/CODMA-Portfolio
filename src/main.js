import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import "@fontsource/poppins";

loadFonts()

const app = createApp(App)
app.directive('underline', (el, binding) => {
  el.style.textDecorationLine = 'underline'
  el.style.textDecorationStyle = 'wavy'
  el.style.textDecorationColor = binding.value || 'yellow'
  el.style.textDecorationThickness = '3px'
})

app.directive('font-size', (el, binding) => {
  el.style.fontSize = binding.value + 'px'
})

app.use(vuetify)

app.mount('#app')

