import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/views/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HelloWorld
    }
  ]
})
