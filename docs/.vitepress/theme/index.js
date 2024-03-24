import DefaultTheme from 'vitepress/theme'
import '@w-ui/theme-chalk/src/index.scss'
import WIcon from '@w-ui/components/icon'
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(WIcon) // 注册组件
  }
}
