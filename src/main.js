// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VeeValidate from 'vee-validate'
import validateConfig from './veevalidate/config'
import VModal from 'vue-js-modal'
import { store } from './store/index.js'

Vue.config.productionTip = false

Vue.use(VeeValidate, validateConfig)
Vue.use(VModal, { dynamic: true, dynamicDefaults: { clickToClose: false } })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
