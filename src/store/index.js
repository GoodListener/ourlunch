import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters.js'
import * as mutations from './mutations.js'
import * as actions from './actions.js'

Vue.use(Vuex)

const state = {
  loginUser: {
    companyName: '유프리즘',
    memberId: 'user01',
    memberName: '사용자1',
    familyId: 'uprism'
  }
}

export const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
