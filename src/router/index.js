import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import detail from '@/pages/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/detail',
      name: 'Detail',
      component: detail
    }
  ]
})
