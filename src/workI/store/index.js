import * as workITypes from 'src/workI/store/mutation-types'
import * as dashTypes from 'src/dash/store/mutation-types'
import workI from 'src/workI/api'
import swal from 'sweetalert'
import store from 'src/store'

export default {
  state: {
    indexDisp: true,
    detailDisp: false,
    workI: [{}],
    workIDetail: [[{}]]
  },
  getters: {
    [workITypes.GET_WORKI_INDEX_DISP] (state) {
      return state.indexDisp
    },
    [workITypes.GET_WORKI_DETAIL_DISP] (state) {
      return state.detailDisp
    },
    [workITypes.GET_WORKI] (state) {
      return state.workI
    },
    [workITypes.GET_WORKI_DETAIL] (state) {
      return state.workIDetail
    }
  },
  mutations: {
    [workITypes.SET_WORKI_TOGGLE_PAGE] (state, page) {
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
    [workITypes.SET_WORKI] (state, workI) {
      state.workI = workI
    },
    [workITypes.SET_WORKI_DETAIL] (state, workIDetail) {
      state.workIDetail = workIDetail
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
    },
    [workITypes.RECEIVED_WORKI_DETAIL] ({ commit }, folder) {
      store.commit(dashTypes.SET_DASH_BODY_LOADING, true)
      workI.getWorkIDetail(folder)
        .then((response) => {
          const data = JSON.parse(response.request.response)
          commit(workITypes.SET_WORKI_DETAIL, data)
          store.commit(dashTypes.SET_DASH_BODY_LOADING, false)
        })
        .catch((error) => {
          const data = error.response.data
          swal({title: '', text: data.response, html: true, type: 'error'})
        })
    }
  }
}
