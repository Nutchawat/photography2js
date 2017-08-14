import * as types from 'src/contact/store/mutation-types'
import contact from 'src/contact/api'
import swal from 'sweetalert'

export default {
  state: {
    contact: {
      head: '',
      email: '',
      tel1: '',
      tel1_desc: '',
      tel2: '',
      tel2_desc: ''
    }
  },
  getters: {
    [types.GET_CONTACT] (state) {
      return state.contact
    }
  },
  mutations: {
    [types.SET_CONTACT] (state, contact) {
      state.contact = contact
    }
  },
  actions: {
    [types.RECEIVED_CONTACT] ({ commit }) {
      contact.getContact()
        .then((response) => {
          const data = JSON.parse(response.request.response)
          commit(types.SET_CONTACT, data)
        })
        .catch((error) => {
          const data = error.response.data
          swal({title: '', text: data.response, html: true, type: 'error'})
        })
    }
  }
}
