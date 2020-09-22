import Vue from 'vue'
import VueRouter from 'vue-router'
// import topnav from '../views/topnav'
import Home from '../views/topnav/Home.vue'
import fenlei from '../views/fenlei/fenlei.vue'
import PersonalCenter from '../views/Persona/Personal2.vue'
import Square from '../views/topnav/Square.vue'
import About from '../views/topnav/About.vue'
import Searchbar from '../views/topnav/Searchbar.vue'





Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes:[
  {
    path: '/Home',
    name: 'Home',
  	component:() => import('@/views/topnav/Home.vue')
  },
  {
    path: '/fenlei',
    name: 'fenlei',
  	component:() => import('@/views/fenlei/fenlei.vue')
    // component: Home
  },
  {
    path: '/PersonalCenter',
    name: 'PersonalCenter',
  	component:() => import('@/views/Persona/Personal2.vue')
    // component: Home
  },
  {
    path: '/Square',
    name: 'Square',
  	component:() => import('@/views/topnav/Square.vue')
    // component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/topnav/About.vue')
  },
  {
    path: '/sear',
    name: 'sear',
    component: () => import('@/views/topnav/sear.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/p1.vue'),
  },
  
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/topnav/Home.vue')
  }
  
]
})

export default router
