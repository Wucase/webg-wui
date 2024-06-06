import {PageMap} from './pageMap.js'


const findMusicRoutes = {
  path: PageMap.findMusic,
  name: PageMap.findMusic,
  component: () => import("@/views/findMusic/index.vue"),
  meta: {
    menu: PageMap.findMusic,
  }
}


export default findMusicRoutes
