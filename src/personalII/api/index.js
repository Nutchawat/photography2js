import { instance, endpoint, isMock, generator } from 'src/api'
import { mocker } from 'src/personalII/api/mocker'

export default {
  getPersonalII () {
    if (isMock) return generator(mocker.personalII())
    return instance().get(endpoint + '/personalII')
  },
  getPersonalIIDetail (folder) {
    if (isMock) return generator(mocker.personalIIDetail(folder))
    return instance().get(endpoint + '/personalIIDetail/' + folder)
  }
}
