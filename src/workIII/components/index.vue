<template>
  <div name="workIII">
    <template v-if="workIII.length === 0">
      <underconstruction />
    </template>
    <template v-else>
      <vue-perfect-layout v-show="indexDisp"
                          :photos="workIII"
                          :togglePage="togglePage"
                          :receivedDetail="receivedWorkIDetail"
      />
      <vue-light-gallery  v-show="detailDisp"
                          :photos="workIIIDetail"
                          :togglePage="togglePage"
      />
    </template>
  </div>
</template>

<script>
  import underconstruction from 'src/underconstruction/components'
  import { mapGetters, mapMutations, mapActions } from 'vuex'
  import * as types from 'src/workIII/store/mutation-types'

  export default {
    name: 'workIII',
    components: {
      underconstruction
    },
    created () {
      this.receivedWorkIII()
    },
    computed: {
      ...mapGetters({
        indexDisp: types.GET_WORKIII_INDEX_DISP,
        detailDisp: types.GET_WORKIII_DETAIL_DISP,
        workIII: types.GET_WORKIII,
        workIIIDetail: types.GET_WORKIII_DETAIL
      })
    },
    methods: {
      ...mapMutations({
        togglePage: types.SET_WORKIII_TOGGLE_PAGE
      }),
      ...mapActions({
        receivedWorkIII: types.RECEIVED_WORKIII,
        receivedWorkIIIDetail: types.RECEIVED_WORKIII_DETAIL
      })
    }
  }
</script>