import { generator } from 'src/api'
import { mocker } from 'src/bio/api/mocker'

export default {
  getBio () {
    return generator(mocker.bio())
  }
}
