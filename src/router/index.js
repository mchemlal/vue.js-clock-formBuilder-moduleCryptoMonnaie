import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: home
  },
  {
    path: '/formulaire',
    name: 'formulaire',
    component: () => import(/* webpackChunkName: "about" */ '../views/formulaire.vue')
  },
  {
    path: '/bitcoin',
    name: 'bitcoin',
    component: () => import('../views/bitcoin.vue')
  },
  {
    path: '/clock',
    name: 'clock',
    component: () => import('../views/clock.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes,
})

export default router