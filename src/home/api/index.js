import { generator } from 'src/api'
import { mocker } from 'src/home/api/mocker'

export default {
  getHome () {
    return generator(mocker.home())
  },
  getHomeDetail ({ folder, subFolder }) {
    return generator(mocker.homeDetail({ folder: folder, subFolder: subFolder }))
  }
}
