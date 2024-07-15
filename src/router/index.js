
/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto'
// import { routes } from 'vue-router/auto-routes'


import HomeView from '@/components/Homepage.vue'
import Spotlight from '@/components/Spotlight.vue'
import Datalocker from '@/components/Datalocker.vue'
import Centtor from '@/components/Centtor.vue'
import Kultralab from '@/components/Kultralab.vue'
import Contact from '@/components/Contact.vue'

const routes = [
  { path: '/', component: HomeView},
  { path: '/spotlight', component: Spotlight},
  { path: '/Datalocker', component: Datalocker},
  { path: '/Centtor', component: Centtor},
  { path: '/Kultralab', component: Kultralab},
  { path: '/Contact', component: Contact}
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
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
