import { GlobalComponents } from './../icon/index'
import { withInstall } from '@w-ui/utils/with-install'
import _Tree from './src/tree.vue'

const Tree = withInstall(_Tree)

export default Tree

declare module 'vue' {
  export interface GlobalComponents {
    WTree: typeof Tree
  }
}
