import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Skills from '@/components/skills.vue'
import Projects from '@/components/projects.vue'
import Contact from '@/components/contact.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: '',
          name: 'default-home',
          component: () => import('@/components/home.vue'), // Default content
        },
        {
          path: 'skills',
          name: 'skills',
          component: Skills,
        },
        {
          path: 'projects',
          name: 'projects',
          component: Projects,
        },
        {
          path: 'contact',
          name: 'contact',
          component: Contact,
        },
      ],
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return { top: 0, behavior: 'instant' }
  },
})

export default router
