import {RouteRecordRaw } from 'vue-router'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/views/home')
  },
  {
    path: '/login',
    component: () => import('@/views/Login'),
    meta: {}
  }
]
