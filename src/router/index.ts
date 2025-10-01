import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomePage.vue'
import ServicesList from '../views/ServicesList.vue'
import ServiceDetail from '../views/ServiceDetail.vue'
import AboutPage from '../views/AboutPage.vue'
import ContactPage from '../views/ContactPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/services',
    name: 'Services',
    component: ServicesList
  },
  {
    path: '/services/:slug',
    name: 'ServiceDetail',
    component: ServiceDetail
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
