/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import 'font-awesome/css/font-awesome.min.css' 
import 'vuetify/styles'

// Composables
import { createVuetify, type ThemeDefinition } from 'vuetify'
import { aliases, fa } from 'vuetify/iconsets/fa4'
import { VStepperVertical } from 'vuetify/labs/VStepperVertical'
import { VDateInput } from 'vuetify/labs/VDateInput'



const customLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: '#E9C6D7',
    secondary: '#2F2F2F',
    accent: '#E9C6D7',
    error: '#dc3545',
    info: '#2F2F2F',
    text: '#2F2F2F',
    background: '#FFFFFF',
    'on-background': '#2F2F2F'
  }
}

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'customLightTheme',
    themes: {
      customLightTheme
    }
  },
  icons: {
    defaultSet: 'fa',
    aliases,
    sets: {
      fa,
    },
  },
  components: {
    VStepperVertical,
    VDateInput
  },
})
