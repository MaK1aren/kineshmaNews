import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import politics from '@/views/news/politics.vue';
import index from '@/views/news/index.vue';
import science from '@/views/news/science.vue';
import piple from '@/views/news/piple.vue';
import sports from '@/views/news/sports.vue';
import incidents from '@/views/news/incidents.vue';
import economics from '@/views/news/economics.vue';
import  createArticle from '@/views/admin/createArticle.vue';
const routes = [
  {
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/politics',
    name: '/politics',
    component: politics
  },
  {
    path: '/piple',
    name: '/piple',
    component: piple
  },
  {
    path: '/science',
    name: '/science',
    component: science
  },
  {
    path: '/sports',
    name: '/sports',
    component:  sports

  },
  {
    path: '/incidents',
    name: '/incidents',
    component: incidents
  },
  {
    path: '/economics',
    name: '/economics',
    component: economics
  },
  {
  path: '/adm/createArticle',
  name: '/adm/createArticle',
  component: createArticle
  },
  
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
