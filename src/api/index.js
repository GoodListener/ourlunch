import axios from 'axios'
// import getSearchRestaurants from './getRestaurants'

const api = {
  baseUrl: '/api/'
}

function getMyProfile () {
  return axios.get(`${api.baseUrl}profile/me`)
}

function getMembers () {
  return axios.get(`${api.baseUrl}member`)
}

function getFamily (familyName) {
  return axios.get(`${api.baseUrl}family`)
}

function getMyFamily () {
  return axios.get(`${api.baseUrl}family`)
}

function getFamilyRestaurant (familyname) {
  return axios.get(`${api.baseUrl}family/restaurant`)
}

function getSearchRestaurant () {
  return axios.get(`${api.baseUrl}search/fakeRestaurant`) // 가짜 검색 데이터
}

export {
  getSearchRestaurant, // 검색한 식당 결과 가져오기
  getFamilyRestaurant, // 내가 속한 패밀리 식당 정보 가져오기
  getMyProfile, // 내가 가입한 정보 가져오기
  getMyFamily, // 내가 가입한 패밀리정보 가져오기
  getMembers, // 내가 속한 패밀리 팸원 가져오기
  getFamily // 패밀리 정보 가져오기 (패밀리 이름으로)
}
