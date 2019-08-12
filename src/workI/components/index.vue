<template>
  <div name="workI">
    <!--<underconstruction />-->
    <vue-perfect-layout v-show="indexDisp"
                        :photos="workI"
                        :togglePage="togglePage"
                        :receivedDetail="receivedWorkIDetail"
    />
    <vue-light-gallery  v-show="detailDisp"
                        :photos="workIDetail"
                        :togglePage="togglePage"
    />
  </div>
</template>

<script>
  // import underconstruction from 'src/underconstruction/components'
  import { mapGetters, mapMutations, mapActions } from 'vuex'
  import * as types from 'src/workI/store/mutation-types'

  export default {
    name: 'workI',
    // components: {
    //   underconstruction
    // }
    created () {
      this.receivedWorkI()
    },
    computed: {
      ...mapGetters({
        indexDisp: types.GET_WORKI_INDEX_DISP,
        detailDisp: types.GET_WORKI_DETAIL_DISP,
        workI: types.GET_WORKI,
        workIDetail: types.GET_WORKI_DETAIL
      })
    },
    methods: {
      ...mapMutations({
        togglePage: types.SET_WORKI_TOGGLE_PAGE
      }),
      ...mapActions({
        receivedWorkI: types.RECEIVED_WORKI,
        receivedWorkIDetail: types.RECEIVED_WORKI_DETAIL
      })
    }
  }
</script>