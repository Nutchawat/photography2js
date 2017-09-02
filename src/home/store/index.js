import * as homeTypes from 'src/home/store/mutation-types'
import * as dashTypes from 'src/dash/store/mutation-types'
import home from 'src/home/api'
import swal from 'sweetalert'
import store from 'src/store'

export default {
  state: {
    indexDisp: true,
    detailDisp: false,
    home: [],
    homeDetail: [[{}]]
  },
  getters: {
    [homeTypes.GET_HOME_INDEX_DISP] (state) {
      return state.indexDisp
    },
    [homeTypes.GET_HOME_DETAIL_DISP] (state) {
      return state.detailDisp
    },
    [homeTypes.GET_HOME] (state) {
      return state.home
    },
    [homeTypes.GET_HOME_DETAIL] (state) {
      return state.homeDetail
    }
  },
  mutations: {
    [homeTypes.SET_HOME_TOGGLE_PAGE] (state, page) {
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
    [homeTypes.SET_HOME] (state, home) {
      state.home = home
    },
    [homeTypes.SET_HOME_DETAIL] (state, homeDetail) {
      state.homeDetail = homeDetail
    }
  },
  actions: {
    [homeTypes.RECEIVED_HOME] ({ commit }) {
      store.commit(dashTypes.SET_DASH_BODY_LOADING, true)
      home.getHome()
        .then((response) => {
          const data = JSON.parse(response.request.response)
          commit(homeTypes.SET_HOME, data)
          store.commit(dashTypes.SET_DASH_BODY_LOADING, false)
        })
        .catch((error) => {
          const data = error.response.data
          swal({title: '', text: data.response, html: true, type: 'error'})
        })
    },
    [homeTypes.RECEIVED_HOME_DETAIL] ({ commit }, { folder, subFolder }) {
      store.commit(dashTypes.SET_DASH_BODY_LOADING, true)
      home.getHomeDetail({ folder: folder, subFolder: subFolder })
        .then((response) => {
          const data = JSON.parse(response.request.response)
          commit(homeTypes.SET_HOME_DETAIL, data)
          store.commit(dashTypes.SET_DASH_BODY_LOADING, false)
        })
        .catch((error) => {
          const data = error.response.data
          swal({title: '', text: data.response, html: true, type: 'error'})
        })
    }
  }
}
