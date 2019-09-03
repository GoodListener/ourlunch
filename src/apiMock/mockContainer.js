import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import searchRestaurantList from '@/apiFakeData/fakeSearchRestaurantsApiData.json'
import restaurantList from '@/apiFakeData/fakeFamilyRestaurants.json'
import memberList from '@/apiFakeData/fakeFamilyMembers.json'
import myLoginData from '@/apiFakeData/fakeMyLoginInfoApiData.json'
import myFamilyData from '@/apiFakeData/fakeMyFamilyApiData.json'

export default class MockContainer {
  constructor () {
    if (process.env.NODE_ENV === 'development') {
      this.mock = new MockAdapter(axios)
    }
  }

  init () {
    this.mock.onGet('/api/search/fakeRestaurant').reply(200, searchRestaurantList)
    this.mock.onGet('/api/family/restaurant').reply(200, restaurantList)
    this.mock.onGet('/api/member').reply(200, memberList)
    this.mock.onGet('/api/profile/me').reply(200, myLoginData)
    this.mock.onGet('/api/family').reply(200, myFamilyData)
  }
}
