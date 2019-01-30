<template>
  <div name="personalIII">
    <template v-if="personalIII.length === 0">
      <underconstruction />
    </template>
    <template v-else>
      <vue-perfect-layout v-show="indexDisp"
                          :photos="personalIII"
                          :togglePage="togglePage"
                          :receivedDetail="receivedPersonalIIIDetail"
      />
      <vue-light-gallery  v-show="detailDisp"
                          :photos="personalIIIDetail"
                          :togglePage="togglePage"
      />
    </template>
  </div>
</template>

<script>
  import underconstruction from 'src/underconstruction/components'
  import { mapGetters, mapMutations, mapActions } from 'vuex'
  import * as types from 'src/personalIII/store/mutation-types'

  export default {
    name: 'personalIII',
    components: {
      underconstruction
    },
    created () {
      this.receivedPersonalIII()
    },
    computed: {
      ...mapGetters({
        indexDisp: types.GET_PERSONALIII_INDEX_DISP,
        detailDisp: types.GET_PERSONALIII_DETAIL_DISP,
        personalIII: types.GET_PERSONALIII,
        personalIIIDetail: types.GET_PERSONALIII_DETAIL
      })
    },
    methods: {
      ...mapMutations({
        togglePage: types.SET_PERSONALIII_TOGGLE_PAGE
      }),
      ...mapActions({
        receivedPersonalIII: types.RECEIVED_PERSONALIII,
        receivedPersonalIIIDetail: types.RECEIVED_PERSONALIII_DETAIL
      })
    }
  }
</script>