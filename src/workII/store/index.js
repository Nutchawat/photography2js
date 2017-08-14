import * as workIITypes from 'src/workII/store/mutation-types'
import * as dashTypes from 'src/dash/store/mutation-types'
import workII from 'src/workII/api'
import swal from 'sweetalert'
import store from 'src/store'

export default {
  state: {
    workII: [[{}]]
  },
  getters: {
    [workIITypes.GET_WORKII] (state) {
      return state.workII
    }
  },
  mutations: {
    [workIITypes.SET_WORKII] (state, workII) {
      state.workII = workII
    }
  },
  actions: {
    [workIITypes.RECEIVED_WORKII] ({ commit }) {
      store.commit(dashTypes.SET_DASH_BODY_LOADING, true)
      workII.getWorkII()
        .then((response) => {
          const data = JSON.parse(response.request.response)
          commit(workIITypes.SET_WORKII, data)
          store.commit(dashTypes.SET_DASH_BODY_LOADING, false)
        })
        .catch((error) => {
          const data = error.response.data
          swal({title: '', text: data.response, html: true, type: 'error'})
        })
    }
  }
}
