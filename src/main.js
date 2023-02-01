import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import "@fontsource/poppins";
import { fontSizeDirective, underlineDirective } from './components/plugins/directive';
import VSwitch from 'v-switch-case'

loadFonts()

const app = createApp(App)

app.use(VSwitch)

app.directive('underline', underlineDirective)
app.directive('font-size', fontSizeDirective)
app.use(vuetify)

app.mount('#app')

