<template>
  <div name="home">
    <vue-image-slider v-if="home.length > 0 && indexDisp"
                      :photos="home"
                      :togglePage="togglePage"
                      :receivedDetail="receivedHomeDetail"
    />
    <vue-light-gallery  v-show="detailDisp"
                        :photos="homeDetail"
                        :togglePage="togglePage"
    />
  </div>
</template>

<script>
  import { mapGetters, mapMutations, mapActions } from 'vuex'
  import * as types from 'src/home/store/mutation-types'

  export default {
    name: 'home',
    created () {
      this.receivedHome()
    },
    computed: {
      ...mapGetters({
        indexDisp: types.GET_HOME_INDEX_DISP,
        detailDisp: types.GET_HOME_DETAIL_DISP,
        home: types.GET_HOME,
        homeDetail: types.GET_HOME_DETAIL
      })
    },
    methods: {
      ...mapMutations({
        togglePage: types.SET_HOME_TOGGLE_PAGE
      }),
      ...mapActions({
        receivedHome: types.RECEIVED_HOME,
        receivedHomeDetail: types.RECEIVED_HOME_DETAIL
      })
    }
  }
</script>