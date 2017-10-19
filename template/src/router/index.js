import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import hello from '@/components/hello'

const routes = [{
    path: '/',
    component: hello
  }
]

export default new Router({
  routes
})
