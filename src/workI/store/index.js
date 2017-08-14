import * as workITypes from 'src/workI/store/mutation-types'
import * as dashTypes from 'src/dash/store/mutation-types'
import workI from 'src/workI/api'
import swal from 'sweetalert'
import store from 'src/store'

export default {
  state: {
    workI: [[{}]]
  },
  getters: {
    [workITypes.GET_WORKI] (state) {
      return state.workI
    }
  },
  mutations: {
    [workITypes.SET_WORKI] (state, workI) {
      state.workI = workI
    }
  },
  actions: {
    [workITypes.RECEIVED_WORKI] ({ commit }) {
      store.commit(dashTypes.SET_DASH_BODY_LOADING, true)
      workI.getWorkI()
        .then((response) => {
          const data = JSON.parse(response.request.response)
          commit(workITypes.SET_WORKI, data)
          store.commit(dashTypes.SET_DASH_BODY_LOADING, false)
        })
        .catch((error) => {
          const data = error.response.data
          swal({title: '', text: data.response, html: true, type: 'error'})
        })
    }
  }
}
