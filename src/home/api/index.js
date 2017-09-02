import { instance, endpoint, isMock, generator } from 'src/api'
import { mocker } from 'src/home/api/mocker'

export default {
  getHome () {
    if (isMock) return generator(mocker.home())
    return instance().get(endpoint + '/home')
  },
  getHomeDetail ({ folder, subFolder }) {
    if (isMock) return generator(mocker.homeDetail({ folder: folder, subFolder: subFolder }))
    // return instance().get(endpoint + '/homeDetail/' + folder)
  }
}
