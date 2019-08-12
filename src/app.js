require('src/bootstrap')

import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from 'src/App.vue'
import { router } from 'src/router'
import store from 'src/store'
import * as dashTypes from 'src/dash/store/mutation-types'
import * as homeTypes from 'src/home/store/mutation-types'
import * as personalITypes from 'src/personalI/store/mutation-types'
import * as personalIITypes from 'src/personalII/store/mutation-types'
import * as personalIIITypes from 'src/personalIII/store/mutation-types'
import * as workITypes from 'src/workI/store/mutation-types'
import * as workIITypes from 'src/workII/store/mutation-types'
import * as workIIITypes from 'src/workIII/store/mutation-types'

import vueImageSlider from 'src/vueImageSlider/components/index.vue'
import vuePerfectLayout from 'src/vuePerfectLayout/components/index.vue'
import vueLightGallery from 'src/vueLightGallery/components/index.vue'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.component('vue-image-slider', vueImageSlider)
Vue.component('vue-perfect-layout', vuePerfectLayout)
Vue.component('vue-light-gallery', vueLightGallery)

router.beforeEach((to, from, next) => {
  switch (to.name) {
    case 'home':
      store.commit(homeTypes.SET_HOME_TOGGLE_PAGE, 'index')
      break
    case 'personalI':
      store.commit(personalITypes.SET_PERSONALI_TOGGLE_PAGE, 'index')
      break
    case 'personalII':
      store.commit(personalIITypes.SET_PERSONALII_TOGGLE_PAGE, 'index')
      break
    case 'personalIII':
      store.commit(personalIIITypes.SET_PERSONALIII_TOGGLE_PAGE, 'index')
      break
    case 'workI':
      store.commit(workITypes.SET_WORKI_TOGGLE_PAGE, 'index')
      break
    case 'workII':
      store.commit(workIITypes.SET_WORKII_TOGGLE_PAGE, 'index')
      break
    case 'workIII':
      store.commit(workIIITypes.SET_WORKIII_TOGGLE_PAGE, 'index')
      break
  }
  store.commit(dashTypes.SET_DASH_FOOTER_DISP, true)
  next()
})

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
