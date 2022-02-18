import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'homepage',
    component: () => import('@/views/HomePage.vue')
  },
  {
    path: '/login',
    name: 'loginpage',
    component: () => import('@/views/LoginPage.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router