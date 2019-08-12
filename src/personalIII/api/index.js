import { generator } from 'src/api'
import { mocker } from 'src/personalIII/api/mocker'

export default {
  getPersonalIII () {
    return generator(mocker.personalIII())
  },
  getPersonalIIIDetail (folder) {
    return generator(mocker.personalIIIDetail(folder))
  }
}
