import { instance, endpoint, isMock, generator } from 'src/api'
import { mocker } from 'src/workI/api/mocker'

export default {
  getWorkI () {
    if (isMock) return generator(mocker.workI())
    return instance().get(endpoint + '/workI')
  },
  getWorkIDetail (folder) {
    if (isMock) return generator(mocker.workIDetail(folder))
    return instance().get(endpoint + '/workIDetail/' + folder)
  }
}
