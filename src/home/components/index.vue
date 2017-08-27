<template>
  <div name="home">
    <vue-image-slider v-if="home.length > 0"
                  :imagePath="imagePath"
                  :images="home"/>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import * as types from 'src/home/store/mutation-types'

  export default {
    name: 'home',
    created () {
      this.receivedHome()
    },
    computed: {
      ...mapGetters({
        imagePath: types.GET_HOME_IMAGE_PATH,
        home: types.GET_HOME
      })
    },
    methods: {
      ...mapActions({
        receivedHome: types.RECEIVED_HOME
      })
    }
  }
</script>