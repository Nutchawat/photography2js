<template>
  <div name="personalII">
    <underconstruction />
    <!-- <vue-perfect-layout v-show="indexDisp"
                        :photos="personalII"
                        :togglePage="togglePage"
                        :receivedDetail="receivedPersonalIIDetail"
    />
    <vue-light-gallery  v-show="detailDisp"
                        :photos="personalIIDetail"
                        :togglePage="togglePage"
    /> -->
  </div>
</template>

<script>
  import underconstruction from 'src/underconstruction/components'
  // import { mapGetters, mapMutations, mapActions } from 'vuex'
  // import * as types from 'src/personalII/store/mutation-types'

  export default {
    name: 'personalII',
    components: {
      underconstruction
    }
    // created () {
    //   this.receivedPersonalII()
    // },
    // computed: {
    //   ...mapGetters({
    //     indexDisp: types.GET_PERSONALII_INDEX_DISP,
    //     detailDisp: types.GET_PERSONALII_DETAIL_DISP,
    //     personalII: types.GET_PERSONALII,
    //     personalIIDetail: types.GET_PERSONALII_DETAIL
    //   })
    // },
    // methods: {
    //   ...mapMutations({
    //     togglePage: types.SET_PERSONALII_TOGGLE_PAGE
    //   }),
    //   ...mapActions({
    //     receivedPersonalII: types.RECEIVED_PERSONALII,
    //     receivedPersonalIIDetail: types.RECEIVED_PERSONALII_DETAIL
    //   })
    // }
  }
</script>