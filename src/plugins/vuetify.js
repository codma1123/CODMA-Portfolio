// Styles
import '@mdi/font/css/materialdesignicons.css'
import '@fortawesome/fontawesome-free/css/all.css'
import 'vuetify/styles'
import { aliases, fa } from 'vuetify/iconsets/fa'
import { mdi } from 'vuetify/iconsets/mdi'

// Vuetify
import { createVuetify } from 'vuetify'

const customTheme = {
  dark: true,
  colors: {
    primary: '#263238',
    'primary-lighten': '#4f5b62',
    'primary-darken' : '#000a12'
  }
}


export default createVuetify({
  theme: {
    defaultTheme: 'customTheme',
    themes: {
      customTheme
    }
  },
  icons: {    
    defaultSet: 'fa',
    aliases,
    sets: {
      fa,
      mdi
    }
  }
})

