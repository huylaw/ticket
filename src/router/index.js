import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import NowShowing from '../views/NowShowing.vue'
import ComingSoon from '../views/ComingSoon.vue'
import Info from '../components/body/Info.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/', name: 'Home', component: Home},
  {path: '/login', name: 'Login', component: Login},
  {path: '/register', name: 'Register', component: Register},
  {path: '/nowshowing', name: 'NowShowing', component: NowShowing},
  {path: '/comingsoon', name: 'ComingSoon', component: ComingSoon},
  {path: '/info', name: 'Info', component: Info},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
