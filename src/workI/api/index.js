import { generator } from 'src/api'
import { mocker } from 'src/workI/api/mocker'

export default {
  getWorkI () {
    return generator(mocker.workI())
  },
  getWorkIDetail (folder) {
    return generator(mocker.workIDetail(folder))
  }
}
