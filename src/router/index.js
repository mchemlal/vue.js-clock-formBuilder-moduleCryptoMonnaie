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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/formulaire.vue')
<<<<<<< HEAD
=======
  },
  {
    path: '/bitcoin',
    name: 'bitcoin',
    component: () => import('../views/bitcoin.vue')
>>>>>>> 86275df40ec3ddc8b6d4ab53d5d8f9718f8753cc
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes,
})

export default router