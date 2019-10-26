import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

let routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const reuqireRouter = require.context(
  './',
  true,
  /\.js$/
)
reuqireRouter.keys().forEach(fileName => {
  if (fileName === './index.js') return
  const componentConfig = reuqireRouter(fileName)
  routes = [...routes, ...(componentConfig.default || componentConfig)]
})

const router = new VueRouter({
  routes
})

export default router
