import * as types from 'src/bio/store/mutation-types'
import bio from 'src/bio/api'
import swal from 'sweetalert'

export default {
  state: {
    bio: {
      head: '',
      body1: '',
      body2: ''
    }
  },
  getters: {
    [types.GET_BIO] (state) {
      return state.bio
    }
  },
  mutations: {
    [types.SET_BIO] (state, bio) {
      state.bio = bio
    }
  },
  actions: {
    [types.RECEIVED_BIO] ({ commit }) {
      bio.getBio()
        .then((response) => {
          const data = JSON.parse(response.request.response)
          commit(types.SET_BIO, data)
        })
        .catch((error) => {
          const data = error.response.data
          swal({title: '', text: data.response, html: true, type: 'error'})
        })
    }
  }
}
