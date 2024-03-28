import { createApp } from 'vue'
import App from './App.vue'
import Icon from '@w-ui/components/icon'
import Tree from '@w-ui/components/tree'
import '@w-ui/theme-chalk/src/index.scss'

const plugins = [Icon, Tree]

const app = createApp(App)
plugins.forEach(comp => app.use(comp))

app.mount('#app')
