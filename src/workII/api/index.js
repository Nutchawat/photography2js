import { generator } from 'src/api'
import { mocker } from 'src/workII/api/mocker'

export default {
  getWorkII () {
    return generator(mocker.workII())
  },
  getWorkIIDetail (folder) {
    return generator(mocker.workIIDetail(folder))
  }
}
