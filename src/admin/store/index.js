import * as types from 'src/admin/store/mutation-types'
import admin from 'src/admin/api'
import swal from 'sweetalert'

export default {
  state: {
    admin: {
      head: '',
      body1: '',
      body2: ''
    }
  },
  getters: {
    [types.GET_ADMIN] (state) {
      return state.admin
    }
  },
  mutations: {
    [types.SET_ADMIN] (state, admin) {
      state.admin = admin
    }
  },
  actions: {
    [types.RECEIVED_ADMIN] ({ commit }) {
      admin.getAdmin()
        .then((response) => {
          const data = JSON.parse(response.request.response)
          commit(types.SET_ADMIN, data)
        })
        .catch((error) => {
          const data = error.response.data
          swal({title: '', text: data.response, html: true, type: 'error'})
        })
    }
  }
}
