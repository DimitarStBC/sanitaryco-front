import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '../views/Landing'
import About from '../views/About'
import Prices from '../views/Prices'
import Contact from '../views/Contact'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Landing
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/prices',
    name: 'Prices',
    component: Prices
  },
  {
    path: '/contacts',
    name: 'Contact',
    component: Contact
  }
]

// eslint-disable-next-line no-new
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
