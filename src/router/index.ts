/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import Callback from '@/components/Callback.vue'
import { createRouter, createWebHistory, type RouteLocation } from 'vue-router/auto'
import GettingStarted from '@/components/GettingStarted.vue'
import CalendarHelp from '@/pages/CalendarHelp.vue'


const routes = [
  {path: '/', component: () => import('@/pages/Home.vue')},
  {path: '/getting-started', component: () => import('@/pages/gettingStarted.vue')},
  {path: '/setup', component: () => import('@/pages/setup.vue')},
  {path: '/testing', component: GettingStarted},
  {path: '/callback', component: Callback},
  {path: '/calendar-help', component: CalendarHelp},
  {path: '/about', component: () => import('@/pages/About.vue')},
  {path: '/help', component: () => import('@/pages/GeneralHelp.vue')},
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err: Error, to: RouteLocation) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (!localStorage.getItem('vuetify:dynamic-reload')) {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    } else {
      console.error('Dynamic import error, reloading page did not fix it', err)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router
