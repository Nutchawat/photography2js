<template>
  <div name="workII">
    <vue-perfect-layout :photos="workII"/>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import * as types from 'src/workII/store/mutation-types'

  export default {
    name: 'workII',
    created () {
      this.receivedWorkII()
    },
    computed: {
      ...mapGetters({
        workII: types.GET_WORKII
      })
    },
    methods: {
      ...mapActions({
        receivedWorkII: types.RECEIVED_WORKII
      })
    }
  }
</script>