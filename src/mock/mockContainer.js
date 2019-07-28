import MockAdapter from 'axios-mock-adapter'
import restaurantList from '@/data/fakeRestaurantApiData.json'

export class MockContainer {
  constructor (axios) {
    this.mock = new MockAdapter(axios)
  }

  init () {
    this.mock.onGet('/api/restaurant').reply(200, restaurantList)
  }
}
