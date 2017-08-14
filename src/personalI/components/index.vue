<template>
  <div name="personalI">
    <vue-perfect-layout :photos="personalI"/>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import * as types from 'src/personalI/store/mutation-types'

  export default {
    name: 'personalI',
    created () {
      this.receivedPersonalI()
    },
    computed: {
      ...mapGetters({
        personalI: types.GET_PERSONALI
      })
    },
    methods: {
      ...mapActions({
        receivedPersonalI: types.RECEIVED_PERSONALI
      })
    }
  }
</script>