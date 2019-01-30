import * as workIIITypes from 'src/workIII/store/mutation-types'
import * as dashTypes from 'src/dash/store/mutation-types'
import workIII from 'src/workIII/api'
import swal from 'sweetalert'
import store from 'src/store'

export default {
  state: {
    indexDisp: true,
    detailDisp: false,
    workIII: [{}],
    workIIIDetail: [[{}]]
  },
  getters: {
    [workIIITypes.GET_WORKIII_INDEX_DISP] (state) {
      return state.indexDisp
    },
    [workIIITypes.GET_WORKIII_DETAIL_DISP] (state) {
      return state.detailDisp
    },
    [workIIITypes.GET_WORKIII] (state) {
      return state.workIII
    },
    [workIIITypes.GET_WORKIII_DETAIL] (state) {
      return state.workIIIDetail
    }
  },
  mutations: {
    [workIIITypes.SET_WORKIII_TOGGLE_PAGE] (state, page) {
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
    [workIIITypes.SET_WORKIII] (state, workIII) {
      state.workIII = workIII
    },
    [workIIITypes.SET_WORKIII_DETAIL] (state, workIIIDetail) {
      state.workIIIDetail = workIIIDetail
    }
  },
  actions: {
    [workIIITypes.RECEIVED_WORKIII] ({ commit }) {
      store.commit(dashTypes.SET_DASH_BODY_LOADING, true)
      workIII.getWorkIII()
        .then((response) => {
          const data = JSON.parse(response.request.response)
          commit(workIIITypes.SET_WORKIII, data)
          store.commit(dashTypes.SET_DASH_BODY_LOADING, false)
        })
        .catch((error) => {
          const data = error.response.data
          swal({title: '', text: data.response, html: true, type: 'error'})
        })
    },
    [workIIITypes.RECEIVED_WORKIII_DETAIL] ({ commit }, folder) {
      store.commit(dashTypes.SET_DASH_BODY_LOADING, true)
      workIII.getWorkIIIDetail(folder)
        .then((response) => {
          const data = JSON.parse(response.request.response)
          commit(workIIITypes.SET_WORKIII_DETAIL, data)
          store.commit(dashTypes.SET_DASH_BODY_LOADING, false)
        })
        .catch((error) => {
          const data = error.response.data
          swal({title: '', text: data.response, html: true, type: 'error'})
        })
    }
  }
}
