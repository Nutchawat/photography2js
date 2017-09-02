import * as types from 'src/dash/store/mutation-types'
import dash from 'src/dash/api'
import swal from 'sweetalert'

export default {
  state: {
    dashBodyLoading: true,
    dashFooterDisp: false,
    dashFooter: {
      facebook: '',
      instagram: '',
      flickr: '',
      email: ''
    }
  },
  getters: {
    [types.GET_DASH_BODY_LOADING] (state) {
      return state.dashBodyLoading
    },
    [types.GET_DASH_FOOTER_DISP] (state) {
      return state.dashFooterDisp
    },
    [types.GET_DASH_FOOTER] (state) {
      return state.dashFooter
    }
  },
  mutations: {
    [types.SET_DASH_BODY_LOADING] (state, dashBodyLoading) {
      state.dashBodyLoading = dashBodyLoading
    },
    [types.SET_DASH_FOOTER_DISP] (state, dashFooterDisp) {
      state.dashFooterDisp = dashFooterDisp
    },
    [types.SET_DASH_FOOTER] (state, dashFooter) {
      state.dashFooter = dashFooter
    }
  },
  actions: {
    [types.RECEIVED_DASH_FOOTER] ({ commit }) {
      dash.getDashFooter()
        .then((response) => {
          const data = JSON.parse(response.request.response)
          commit(types.SET_DASH_FOOTER, data)
        })
        .catch((error) => {
          const data = error.response.data
          swal({title: '', text: data.response, html: true, type: 'error'})
        })
    }
  }
}
