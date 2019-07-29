import axios from 'axios'

const api = {
  baseUrl: '/api/'
}

function getRestaurants (params) {
  return axios.get(`${api.baseUrl}restaurant`, params)
}

function getMembers () {
  return axios.get(`${api.baseUrl}member`)
}

export {
  getRestaurants,
  getMembers
}
