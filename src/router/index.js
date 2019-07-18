import Vue from 'vue'
import Router from 'vue-router'
import Test from '../components/Test'
import Home from '../components/Home'
import StartFamily from '../components/StartFamily'
import StartComplete from '../components/StartComplete'
import JoinFam from '../components/JoinFam'
import Main from '../components/Main'
import ChoiceLunch1 from '../components/ChoiceLunch1'
import ChoiceLunch2 from '../components/ChoiceLunch2'
import ChoiceLunchResult from '../components/ChoiceLunchResult'
// peace study
import Study from '../components/Study'

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
      path: '/study',
      name: 'Study',
      component: Study
    },
    {
      path: '/startFamily',
      name: 'StartFamily',
      component: StartFamily
    },
    {
      path: '/startComplete',
      name: 'StartComplete',
      component: StartComplete
    },
    {
      path: '/joinFam',
      name: 'JoinFam',
      component: JoinFam
    },
    {
      path: '/main',
      name: 'Main',
      component: Main
    },
    {
      path: '/choiceLunch1',
      name: 'ChoiceLunch1',
      component: ChoiceLunch1
    },
    {
      path: '/choiceLunch2',
      name: 'ChoiceLunch2',
      component: ChoiceLunch2
    },
    {
      path: '/choiceLunchResult',
      name: 'ChoiceLunchResult',
      component: ChoiceLunchResult
    }
  ]
})
