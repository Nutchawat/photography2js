<template>
  <div id="dash">
    <dash-header />
    <dash-body :dashBodyLoading="dashBodyLoading" />
    <dash-footer :dashFooter="dashFooter" />
  </div>
</template>

<script>
  import dashHeader from './dashHeader.vue'
  import dashBody from './dashBody.vue'
  import dashFooter from './dashFooter.vue'
  import { mapGetters, mapActions } from 'vuex'
  import * as types from 'src/dash/store/mutation-types'

  export default {
    name: 'dash',
    created () {
      this.receivedDashFooter()
    },
    computed: {
      ...mapGetters({
        dashBodyLoading: types.GET_DASH_BODY_LOADING,
        dashFooter: types.GET_DASH_FOOTER
      })
    },
    methods: {
      ...mapActions({
        receivedDashFooter: types.RECEIVED_DASH_FOOTER
      })
    },
    components: {
      dashHeader,
      dashBody,
      dashFooter
    }
  }
</script>