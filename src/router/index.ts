import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import ('../views/login.vue')
    },
    {
      path: '/pages',
      name: 'pages',
      component: () => import('../views/pagesView.vue'),
      redirect: '/pages/home',
      children: [
        {
          name: 'home',
          path: 'home', 
          component: () => import('../views/pages/home.vue'),
        },
        {
          name: 'about',
          path: 'about', 
          component: () => import('../views/pages/about.vue'),
        }
      ]
    }
  ]
})

export default router
