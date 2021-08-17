import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/config/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/config/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/config/verify',
    name: 'Verify',
    component: () => import('../views/Verify.vue')
  },
  /* {
    path: '/config/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/config/settings',
    name: 'Settings',
    component: () => import('../views/Settings.vue')
  }, */
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  /* {
    path: '/nas',
    name: 'nas',
    component: () => import('../components/home/nas.vue')
  }, */
  {
    path: '*',
    name: 'Login',
    component: () => import('../views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
