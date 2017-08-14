<template>
  <div name="personalII">
    <vue-perfect-layout :photos="personalII"/>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import * as types from 'src/personalII/store/mutation-types'

  export default {
    name: 'personalII',
    created () {
      this.receivedPersonalII()
    },
    computed: {
      ...mapGetters({
        personalII: types.GET_PERSONALII
      })
    },
    methods: {
      ...mapActions({
        receivedPersonalII: types.RECEIVED_PERSONALII
      })
    }
  }
</script>