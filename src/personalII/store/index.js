import * as personalIITypes from 'src/personalII/store/mutation-types'
import * as dashTypes from 'src/dash/store/mutation-types'
import personalII from 'src/personalII/api'
import swal from 'sweetalert'
import store from 'src/store'

export default {
  state: {
    personalII: [[{}]]
  },
  getters: {
    [personalIITypes.GET_PERSONALII] (state) {
      return state.personalII
    }
  },
  mutations: {
    [personalIITypes.SET_PERSONALII] (state, personalII) {
      state.personalII = personalII
    }
  },
  actions: {
    [personalIITypes.RECEIVED_PERSONALII] ({ commit }) {
      store.commit(dashTypes.SET_DASH_BODY_LOADING, true)
      personalII.getPersonalII()
        .then((response) => {
          const data = JSON.parse(response.request.response)
          commit(personalIITypes.SET_PERSONALII, data)
          store.commit(dashTypes.SET_DASH_BODY_LOADING, false)
        })
        .catch((error) => {
          const data = error.response.data
          swal({title: '', text: data.response, html: true, type: 'error'})
        })
    }
  }
}
