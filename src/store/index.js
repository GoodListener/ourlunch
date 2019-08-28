import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters.js'
import * as mutations from './mutations.js'
import * as actions from './actions.js'

Vue.use(Vuex)

const state = {
  loginUser: { // TODO: 나중에 제거
    userLevel: 'member',
    isLogined: false, // kakao login state
    isFullAuth: false, // ourlunch login state
    nickname: '김응철', // kakao login nickname
    name: '김응철', // ourlunch login name
    appetite: '까칠입맛',
    profile_image: 'http://cfs7.blog.daum.net/image/6/blog/2007/10/26/11/58/472157ea06edf&filename=12%EA%B0%90%EC%9E%901.JPG',
    thumbnail_image: 'http://cfs7.blog.daum.net/image/6/blog/2007/10/26/11/58/472157ea06edf&filename=12%EA%B0%90%EC%9E%901.JPG'
  },
  family: {
    isJoined: true,
    inviteLink: 'join/컴퍼니',
    companyName: '컴퍼니',
    familyName: '스팸'
  },
  company: {
    companyName: '컴퍼니',
    lat: 37.5073734599034,
    lng: 127.05683538326616
  }
}

export const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
