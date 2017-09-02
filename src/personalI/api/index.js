import { generator } from 'src/api'
import { mocker } from 'src/personalI/api/mocker'

export default {
  getPersonalI () {
    return generator(mocker.personalI())
  },
  getPersonalIDetail (folder) {
    return generator(mocker.personalIDetail(folder))
  }
}
