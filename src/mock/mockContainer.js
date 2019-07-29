import MockAdapter from 'axios-mock-adapter'
import restaurantList from '@/data/fakeRestaurantApiData.json'
import memberList from '@/data/fakeMemberApiData.json'

export class MockContainer {
  constructor (axios) {
    this.mock = new MockAdapter(axios)
  }

  init () {
    this.mock.onGet('/api/restaurant').reply(200, restaurantList)
    this.mock.onGet('/api/member').reply(200, memberList)
  }
}
