import { createApp } from 'vue'
import App from './App.vue'
import Icon from '@w-ui/components/icon'
import '@w-ui/theme-chalk/src/icon.scss'

const plugins = [Icon]

const app = createApp(App)
plugins.forEach(comp => app.use(comp))

app.mount('#app')
