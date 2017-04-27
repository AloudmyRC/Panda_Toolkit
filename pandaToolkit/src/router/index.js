import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import PasswordGeneration from '@/components/PasswordGeneration'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }, {
      path: '/PasswordGeneration',
      name: 'PasswordGeneration',
      component: PasswordGeneration
    }
  ]
})
