import MockAdapter from 'axios-mock-adapter'
import restaurantList from '@/data/fakeRestaurantApiData.json'
import memberList from '@/data/fakeMemberApiData.json'
import myProfile from '@/data/fakeMyProfile.json'

export class MockContainer {
  constructor (axios) {
    if (process.env.NODE_ENV === 'development') {
      const mockAxios = axios.create()
      this.mock = new MockContainer(mockAxios)
    }
  }

  init () {
    this.mock.onGet('/api/restaurant').reply(200, restaurantList)
    this.mock.onGet('/api/member').reply(200, memberList)
    this.mock.onGet('/api/profile/me').reply(200, myProfile)
  }
}
