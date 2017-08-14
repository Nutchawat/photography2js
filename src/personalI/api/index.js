import { instance, endpoint, isMock, generator } from 'src/api'
import { mocker } from 'src/personalI/api/mocker'

export default {
  getPersonalI () {
    if (isMock) return generator(mocker.personalI())
    return instance().get(endpoint + '/personalI')
  }
}
