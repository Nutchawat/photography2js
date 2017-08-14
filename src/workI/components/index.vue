<template>
  <div name="workI">
    <vue-perfect-layout :photos="workI"/>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import * as types from 'src/workI/store/mutation-types'

  export default {
    name: 'workI',
    created () {
      this.receivedWorkI()
    },
    computed: {
      ...mapGetters({
        workI: types.GET_WORKI
      })
    },
    methods: {
      ...mapActions({
        receivedWorkI: types.RECEIVED_WORKI
      })
    }
  }
</script>