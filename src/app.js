require('src/bootstrap')

import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from 'src/App.vue'
import { router } from 'src/router'
import store from 'src/store'
import * as dashTypes from 'src/dash/store/mutation-types'

import vueImageSlider from 'src/vueImageSlider/components/index.vue'
import vuePerfectLayout from 'src/vuePerfectLayout/components/index.vue'
import vueLightGallery from 'src/vueLightGallery/components/index.vue'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.component('vue-image-slider', vueImageSlider)
Vue.component('vue-perfect-layout', vuePerfectLayout)
Vue.component('vue-light-gallery', vueLightGallery)

router.beforeEach((to, from, next) => {
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
