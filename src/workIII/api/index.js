import { generator } from 'src/api'
import { mocker } from 'src/workIII/api/mocker'

export default {
  getWorkIII () {
    return generator(mocker.workIII())
  },
  getWorkIIIDetail (folder) {
    return generator(mocker.workIIIDetail(folder))
  }
}
