import axios from 'axios'

const api = {
  baseUrl: '/api/'
}

function getRestaurants (params) {
  const config = {
    headers: {'Authorization': 'KakaoAK 9371d0a85e46655cd886905c0cab174c'}
  }
  return axios.get('https://dapi.kakao.com/v2/local/search/keyword.json?query=' + params.query, config)
}

function getMembers () {
  return axios.get(`${api.baseUrl}member`)
}

export {
  getRestaurants,
  getMembers
}
