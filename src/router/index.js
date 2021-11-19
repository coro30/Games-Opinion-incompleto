import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Opiniones from '@/views/Opiniones.vue'
import Administracion from '@/views/Administracion.vue'
import Editar from '@/components/Editar.vue'
import NotFound from '@/views/NotFound.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  
  {
    path: '/opiniones',
    name: 'opiniones',
    component: Opiniones
  },
  {
    path: '/administracion',
    name: 'administracion',
    component: Administracion    
  },
  {
    path: '/editar/:index',
    name: 'editar',
    component: Editar,
    props: true,    
  },
  {
    path: '/*',
    name: 'notfound',
    component: NotFound    
  },]
// route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
