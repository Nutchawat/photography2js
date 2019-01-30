import * as workIITypes from 'src/workII/store/mutation-types'
import * as dashTypes from 'src/dash/store/mutation-types'
import workII from 'src/workII/api'
import swal from 'sweetalert'
import store from 'src/store'

export default {
  state: {
    indexDisp: true,
    detailDisp: false,
    workII: [{}],
    workIIDetail: [[{}]]
  },
  getters: {
    [workIITypes.GET_WORKII_INDEX_DISP] (state) {
      return state.indexDisp
    },
    [workIITypes.GET_WORKII_DETAIL_DISP] (state) {
      return state.detailDisp
    },
    [workIITypes.GET_WORKII] (state) {
      return state.workII
    },
    [workIITypes.GET_WORKII_DETAIL] (state) {
      return state.workIIDetail
    }
  },
  mutations: {
    [workIITypes.SET_WORKII_TOGGLE_PAGE] (state, page) {
      state.indexDisp = false
      state.detailDisp = false
      switch (page) {
        case 'index':
          state.indexDisp = true
          break
        case 'detail':
          state.detailDisp = true
          break
        default:
          state.indexDisp = true
          break
      }
    },
    [workIITypes.SET_WORKII] (state, workII) {
      state.workII = workII
    },
    [workIITypes.SET_WORKII_DETAIL] (state, workIIDetail) {
      state.workIIDetail = workIIDetail
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
    },
    [workIITypes.RECEIVED_WORKII_DETAIL] ({ commit }, folder) {
      store.commit(dashTypes.SET_DASH_BODY_LOADING, true)
      workII.getWorkIIDetail(folder)
        .then((response) => {
          const data = JSON.parse(response.request.response)
          commit(workIITypes.SET_WORKII_DETAIL, data)
          store.commit(dashTypes.SET_DASH_BODY_LOADING, false)
        })
        .catch((error) => {
          const data = error.response.data
          swal({title: '', text: data.response, html: true, type: 'error'})
        })
    }
  }
}
