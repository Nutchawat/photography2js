import * as personalITypes from 'src/personalI/store/mutation-types'
import * as dashTypes from 'src/dash/store/mutation-types'
import personalI from 'src/personalI/api'
import swal from 'sweetalert'
import store from 'src/store'

export default {
  state: {
    personalI: [[{}]]
  },
  getters: {
    [personalITypes.GET_PERSONALI] (state) {
      return state.personalI
    }
  },
  mutations: {
    [personalITypes.SET_PERSONALI] (state, personalI) {
      state.personalI = personalI
    }
  },
  actions: {
    [personalITypes.RECEIVED_PERSONALI] ({ commit }) {
      store.commit(dashTypes.SET_DASH_BODY_LOADING, true)
      personalI.getPersonalI()
        .then((response) => {
          const data = JSON.parse(response.request.response)
          commit(personalITypes.SET_PERSONALI, data)
          store.commit(dashTypes.SET_DASH_BODY_LOADING, false)
        })
        .catch((error) => {
          const data = error.response.data
          swal({title: '', text: data.response, html: true, type: 'error'})
        })
    }
  }
}
