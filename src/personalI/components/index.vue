<template>
  <div name="personalI">
    <template v-if="personalI.length === 0">
      <underconstruction />
    </template>
    <template v-else>
      <vue-perfect-layout v-show="indexDisp"
                          :photos="personalI"
                          :togglePage="togglePage"
                          :receivedDetail="receivedPersonalIDetail"
      />
      <vue-light-gallery  v-show="detailDisp"
                          :photos="personalIDetail"
                          :togglePage="togglePage"
      />
    </template>
  </div>
</template>

<script>
  import underconstruction from 'src/underconstruction/components'
  import { mapGetters, mapMutations, mapActions } from 'vuex'
  import * as types from 'src/personalI/store/mutation-types'

  export default {
    name: 'personalI',
    components: {
      underconstruction
    },
    created () {
      this.receivedPersonalI()
    },
    computed: {
      ...mapGetters({
        indexDisp: types.GET_PERSONALI_INDEX_DISP,
        detailDisp: types.GET_PERSONALI_DETAIL_DISP,
        personalI: types.GET_PERSONALI,
        personalIDetail: types.GET_PERSONALI_DETAIL
      })
    },
    methods: {
      ...mapMutations({
        togglePage: types.SET_PERSONALI_TOGGLE_PAGE
      }),
      ...mapActions({
        receivedPersonalI: types.RECEIVED_PERSONALI,
        receivedPersonalIDetail: types.RECEIVED_PERSONALI_DETAIL
      })
    }
  }
</script>