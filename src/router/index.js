import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/blogs',
      name: 'blogs',
      component: () => import('../views/Blogs.vue')
    },
    {
      path: '/blogs/:slug',
      name: 'blogDetail',
      component: () => import('../views/BlogDetail.vue')
    }
  ]
})

export default router
