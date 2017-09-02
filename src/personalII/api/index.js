import { generator } from 'src/api'
import { mocker } from 'src/personalII/api/mocker'

export default {
  getPersonalII () {
    return generator(mocker.personalII())
  },
  getPersonalIIDetail (folder) {
    return generator(mocker.personalIIDetail(folder))
  }
}
