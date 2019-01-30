import * as personalIIITypes from 'src/personalIII/store/mutation-types'
import * as dashTypes from 'src/dash/store/mutation-types'
import personalIII from 'src/personalIII/api'
import swal from 'sweetalert'
import store from 'src/store'

export default {
  state: {
    indexDisp: true,
    detailDisp: false,
    personalIII: [{}],
    personalIIIDetail: [[{}]]
  },
  getters: {
    [personalIIITypes.GET_PERSONALIII_INDEX_DISP] (state) {
      return state.indexDisp
    },
    [personalIIITypes.GET_PERSONALIII_DETAIL_DISP] (state) {
      return state.detailDisp
    },
    [personalIIITypes.GET_PERSONALIII] (state) {
      return state.personalIII
    },
    [personalIIITypes.GET_PERSONALIII_DETAIL] (state) {
      return state.personalIIIDetail
    }
  },
  mutations: {
    [personalIIITypes.SET_PERSONALIII_TOGGLE_PAGE] (state, page) {
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
    [personalIIITypes.SET_PERSONALIII] (state, personalIII) {
      state.personalIII = personalIII
    },
    [personalIIITypes.SET_PERSONALIII_DETAIL] (state, personalIIIDetail) {
      state.personalIIIDetail = personalIIIDetail
    }
  },
  actions: {
    [personalIIITypes.RECEIVED_PERSONALIII] ({ commit }) {
      store.commit(dashTypes.SET_DASH_BODY_LOADING, true)
      personalIII.getPersonalIII()
        .then((response) => {
          const data = JSON.parse(response.request.response)
          commit(personalIIITypes.SET_PERSONALIII, data)
          store.commit(dashTypes.SET_DASH_BODY_LOADING, false)
        })
        .catch((error) => {
          const data = error.response.data
          swal({title: '', text: data.response, html: true, type: 'error'})
        })
    },
    [personalIIITypes.RECEIVED_PERSONALIII_DETAIL] ({ commit }, folder) {
      store.commit(dashTypes.SET_DASH_BODY_LOADING, true)
      personalIII.getPersonalIIIDetail(folder)
        .then((response) => {
          const data = JSON.parse(response.request.response)
          commit(personalIIITypes.SET_PERSONALIII_DETAIL, data)
          store.commit(dashTypes.SET_DASH_BODY_LOADING, false)
        })
        .catch((error) => {
          const data = error.response.data
          swal({title: '', text: data.response, html: true, type: 'error'})
        })
    }
  }
}
