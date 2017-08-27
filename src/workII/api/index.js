import { instance, endpoint, isMock, generator } from 'src/api'
import { mocker } from 'src/workII/api/mocker'

export default {
  getWorkII () {
    if (isMock) return generator(mocker.workII())
    return instance().get(endpoint + '/workII')
  },
  getWorkIIDetail (folder) {
    if (isMock) return generator(mocker.workIIDetail(folder))
    return instance().get(endpoint + '/workIIDetail/' + folder)
  }
}
