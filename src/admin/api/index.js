import { instance, endpoint, isMock, generator } from 'src/api'
import { mocker } from 'src/admin/api/mocker'

export default {
  getAdmin () {
    if (isMock) return generator(mocker.admin())
    return instance().get(endpoint + '/admin')
  }
}
