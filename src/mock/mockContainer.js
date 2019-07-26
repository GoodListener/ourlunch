import MockAdapter from 'axios-mock-adapter'

export class MockContainer {
  constructor (axios) {
    this.mock = new MockAdapter(axios)
  }

  init () {
    this.mock.onGet('/restaurant').reply(200, {name: 'test', place: 'good'})
  }
}
