import * as personalITypes from 'src/personalI/store/mutation-types'
import * as dashTypes from 'src/dash/store/mutation-types'
import personalI from 'src/personalI/api'
import swal from 'sweetalert'
import store from 'src/store'

export default {
  state: {
    indexDisp: true,
    detailDisp: false,
    personalI: [[{}]],
    personalIDetail: [[{}]]
  },
  getters: {
    [personalITypes.GET_PERSONALI_INDEX_DISP] (state) {
      return state.indexDisp
    },
    [personalITypes.GET_PERSONALI_DETAIL_DISP] (state) {
      return state.detailDisp
    },
    [personalITypes.GET_PERSONALI] (state) {
      return state.personalI
    },
    [personalITypes.GET_PERSONALI_DETAIL] (state) {
      return state.personalIDetail
    }
  },
  mutations: {
    [personalITypes.SET_PERSONALI_TOGGLE_PAGE] (state, page) {
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
    [personalITypes.SET_PERSONALI] (state, personalI) {
      state.personalI = personalI
    },
    [personalITypes.SET_PERSONALI_DETAIL] (state, personalIDetail) {
      state.personalIDetail = personalIDetail
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
    },
    [personalITypes.RECEIVED_PERSONALI_DETAIL] ({ commit }, folder) {
      store.commit(dashTypes.SET_DASH_BODY_LOADING, true)
      personalI.getPersonalIDetail(folder)
        .then((response) => {
          const data = JSON.parse(response.request.response)
          commit(personalITypes.SET_PERSONALI_DETAIL, data)
          store.commit(dashTypes.SET_DASH_BODY_LOADING, false)
        })
        .catch((error) => {
          const data = error.response.data
          swal({title: '', text: data.response, html: true, type: 'error'})
        })
    }
  }
}
