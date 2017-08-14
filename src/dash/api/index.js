import { instance, endpoint, isMock, generator } from 'src/api'
import { mocker } from 'src/dash/api/mocker'

export default {
  getDash () {
    if (isMock) return generator(mocker.dash())
    return instance().get(endpoint + '/dash')
  },
  getDashFooter () {
    return generator(mocker.dashFooter())
  }
}
