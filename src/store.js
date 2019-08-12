import Vue from 'vue'
import Vuex from 'vuex'

import admin from 'src/admin/store/index.js'
import dash from 'src/dash/store/index.js'
import home from 'src/home/store/index.js'
import personalI from 'src/personalI/store/index.js'
import personalII from 'src/personalII/store/index.js'
import personalIII from 'src/personalIII/store/index.js'
import workI from 'src/workI/store/index.js'
import workII from 'src/workII/store/index.js'
import workIII from 'src/workIII/store/index.js'
import bio from 'src/bio/store/index.js'
import contact from 'src/contact/store/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    admin,
    dash,
    home,
    personalI,
    personalII,
    personalIII,
    workI,
    workII,
    workIII,
    bio,
    contact
  }
})
