import * as homeTypes from 'src/home/store/mutation-types'
import * as dashTypes from 'src/dash/store/mutation-types'
import home from 'src/home/api'
import swal from 'sweetalert'
import store from 'src/store'
let config = require('src/../env')

export default {
  state: {
    imagePath: config.defaultBaseURL + config.baseImagePath + 'HOME/',
    home: []
  },
  getters: {
    [homeTypes.GET_HOME_IMAGE_PATH] (state) {
      return state.imagePath
    },
    [homeTypes.GET_HOME] (state) {
      return state.home
    }
  },
  mutations: {
    [homeTypes.SET_HOME] (state, home) {
      state.home = home
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
    }
  }
}
