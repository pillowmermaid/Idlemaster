import Vue from 'vue'
import Router from 'vue-router'
import MainScreen from '@/screens/MainScreen'

Vue.use(Router)

const routes = [
  { path: '/', component: MainScreen, name: 'main-screen' }
  // { path: '/options', component: Index, name: 'learn-more' }
]

export default new Router({
  mode: 'history',
  routes
})
