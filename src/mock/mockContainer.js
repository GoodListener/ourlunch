import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import searchRestaurantList from '@/data/fakeSearchRestaurantsApiData.json'
import restaurantList from '@/data/fakeRestaurantApiData.json'
import memberList from '@/data/fakeMemberApiData.json'
import myLoginData from '@/data/fakeMyLoginInfoApiData.json'
import myFamilyData from '@/data/fakeMyFamilyApiData.json'

export default class MockContainer {
  constructor () {
    if (process.env.NODE_ENV === 'development') {
      this.mock = new MockAdapter(axios)
    }
  }

  init () {
    this.mock.onGet('/api/search/fakeRestaurant').reply(200, searchRestaurantList)
    this.mock.onGet('/api/restaurant').reply(200, restaurantList)
    this.mock.onGet('/api/member').reply(200, memberList)
    this.mock.onGet('/api/profile/me').reply(200, myLoginData)
    this.mock.onGet('/api/family').reply(200, myFamilyData)
  }
}
