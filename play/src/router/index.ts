import { createRouter,createWebHashHistory } from "vue-router";
import findMusicRoutes from './findMusic'
import {PageMap} from "./pageMap";
const routes = [
  {
    path: '/',
    name: 'Root',
    component: () => import('@/views/Root.vue'),
    redirect: {name: PageMap.findMusic},
    children: [
      findMusicRoutes
    ]
  }

]

const router = createRouter({
  history:createWebHashHistory(),
  routes
})


export default router
