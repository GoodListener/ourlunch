import Vue from 'vue'
import Router from 'vue-router'
import Test from '../components/Test'
import Home from '../components/Home'
import StartFamily1 from '../components/StartFamily1'
import StartFamily2 from '../components/StartFamily2'
import StartFamily3 from '../components/StartFamily3'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/startFamily1',
      name: 'StartFamily1',
      component: StartFamily1
    },
    {
      path: '/startFamily2',
      name: 'StartFamily2',
      component: StartFamily2
    },
    {
      path: '/startFamily3',
      name: 'StartFamily3',
      component: StartFamily3
    }
  ]
})
