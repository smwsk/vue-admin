import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../views/layout/Layout'
import Index from '../views/components/index'
import Home from '../views/components/Home/Home'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      redirect: '/home',
      children: [
        { path: 'home', component: Home }
      ]
    }
  ]
})
