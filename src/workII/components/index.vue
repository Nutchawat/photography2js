<template>
  <div name="workII">
    <vue-perfect-layout v-show="indexDisp"
                        :photos="workII"
                        :togglePage="togglePage"
                        :receivedDetail="receivedWorkIIDetail"
    />
    <vue-light-gallery  v-show="detailDisp"
                        :photos="workIIDetail"
                        :togglePage="togglePage"
    />
  </div>
</template>

<script>
  import { mapGetters, mapMutations, mapActions } from 'vuex'
  import * as types from 'src/workII/store/mutation-types'

  export default {
    name: 'workII',
    created () {
      this.receivedWorkII()
    },
    computed: {
      ...mapGetters({
        indexDisp: types.GET_WORKII_INDEX_DISP,
        detailDisp: types.GET_WORKII_DETAIL_DISP,
        workII: types.GET_WORKII,
        workIIDetail: types.GET_WORKII_DETAIL
      })
    },
    methods: {
      ...mapMutations({
        togglePage: types.SET_WORKII_TOGGLE_PAGE
      }),
      ...mapActions({
        receivedWorkII: types.RECEIVED_WORKII,
        receivedWorkIIDetail: types.RECEIVED_WORKII_DETAIL
      })
    }
  }
</script>