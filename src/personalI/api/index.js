import { instance, endpoint, isMock, generator } from 'src/api'
import { mocker } from 'src/personalI/api/mocker'

export default {
  getPersonalI () {
    if (isMock) return generator(mocker.personalI())
    return instance().get(endpoint + '/personalI')
  },
  getPersonalIDetail (folder) {
    if (isMock) return generator(mocker.personalIDetail(folder))
    return instance().get(endpoint + '/personalIDetail/' + folder)
  }
}
