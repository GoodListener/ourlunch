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

function getSearchRestaurant () {
  return axios.get(`${api.baseUrl}search/fakeRestaurant`)
}

export {
  getSearchRestaurant,
  getMyProfile,
  getMembers,
  getFamily
}
