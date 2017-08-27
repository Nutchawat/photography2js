require('src/bootstrap')

import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from 'src/App.vue'
import { router } from 'src/router'
import store from 'src/store'

import imageSlider from 'src/imageSlider/components/index.vue'
import vuePerfectLayout from 'src/vuePerfectLayout/components/index.vue'
import vueLightGallery from 'src/vueLightGallery/components/index.vue'

const env = require('src/../env')

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.component('image-slider', imageSlider)
Vue.component('vue-perfect-layout', vuePerfectLayout)
Vue.component('vue-light-gallery', vueLightGallery)

router.beforeEach((to, from, next) => {
  if (window.localStorage.getItem('baseURL') === null) {
    var location = window.location
    var baseURL = (process.env.NODE_ENV !== 'development') ? location.protocol + '//' + location.host + '/' : env.defaultBaseURL
    window.localStorage.setItem('baseURL', baseURL)
  }
  next()
})

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
