import { generator } from 'src/api'
import { mocker } from 'src/contact/api/mocker'

export default {
  getContact () {
    return generator(mocker.contact())
  }
}
