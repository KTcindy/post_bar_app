import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
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
          name: 'come',
          path: 'come', 
          component: () => import('../views/pages/come.vue'),
        },
        {
          name: 'message',
          path: 'message', 
          component: () => import('../views/pages/message.vue'),
        },
        {
          name: 'mine',
          path: 'mine', 
          component: () => import('../views/pages/mine.vue'),
        }
      ]
    }
  ]
})

export default router
