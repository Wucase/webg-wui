import DefaultTheme from 'vitepress/theme'
import '@w-ui/theme-chalk/src/index.scss'
import WIcon from '@w-ui/components/icon'
import MLayout from './components/MLayout.vue'
import MNavLinks from './components/MNavLinks.vue'

import './styles/index.scss'
export default {
  ...DefaultTheme,

  enhanceApp({ app }) {
    app.use(WIcon)
    app.component('MNavLinks', MNavLinks)
  }
}
