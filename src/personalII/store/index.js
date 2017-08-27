import * as personalIITypes from 'src/personalII/store/mutation-types'
import * as dashTypes from 'src/dash/store/mutation-types'
import personalII from 'src/personalII/api'
import swal from 'sweetalert'
import store from 'src/store'

export default {
  state: {
    indexDisp: true,
    detailDisp: false,
    personalII: [[{}]],
    personalIIDetail: [[{}]]
  },
  getters: {
    [personalIITypes.GET_PERSONALII_INDEX_DISP] (state) {
      return state.indexDisp
    },
    [personalIITypes.GET_PERSONALII_DETAIL_DISP] (state) {
      return state.detailDisp
    },
    [personalIITypes.GET_PERSONALII] (state) {
      return state.personalII
    },
    [personalIITypes.GET_PERSONALII_DETAIL] (state) {
      return state.personalIIDetail
    }
  },
  mutations: {
    [personalIITypes.SET_PERSONALII_TOGGLE_PAGE] (state, page) {
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
    [personalIITypes.SET_PERSONALII] (state, personalII) {
      state.personalII = personalII
    },
    [personalIITypes.SET_PERSONALII_DETAIL] (state, personalIIDetail) {
      state.personalIIDetail = personalIIDetail
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
    },
    [personalIITypes.RECEIVED_PERSONALII_DETAIL] ({ commit }, folder) {
      store.commit(dashTypes.SET_DASH_BODY_LOADING, true)
      personalII.getPersonalIIDetail(folder)
        .then((response) => {
          const data = JSON.parse(response.request.response)
          commit(personalIITypes.SET_PERSONALII_DETAIL, data)
          store.commit(dashTypes.SET_DASH_BODY_LOADING, false)
        })
        .catch((error) => {
          const data = error.response.data
          swal({title: '', text: data.response, html: true, type: 'error'})
        })
    }
  }
}
