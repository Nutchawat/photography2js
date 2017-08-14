<template>
  <div class="section-bio">
    <div class="section-bio-left">
      <div class="text-bio-header">{{ bio.head }}</div>
    </div>
    <div class="section-bio-right">
      <p>&nbsp;&nbsp;&nbsp;{{ bio.body1 }}</p>
      <br>
      <p>&nbsp;&nbsp;&nbsp;{{ bio.body2 }}</p>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import * as types from 'src/bio/store/mutation-types'

  export default {
    name: 'bio',
    created () {
      this.receivedBio()
    },
    computed: {
      ...mapGetters({
        bio: types.GET_BIO
      })
    },
    methods: {
      ...mapActions({
        receivedBio: types.RECEIVED_BIO
      })
    }
  }
</script>