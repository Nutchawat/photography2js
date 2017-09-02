<template>
  <div id="dash">
    <dash-header />
    <dash-body :dashBodyLoading="dashBodyLoading" />
    <dash-footer v-show="dashFooterDisp" :dashFooter="dashFooter" />
  </div>
</template>

<script>
  import dashHeader from './dashHeader.vue'
  import dashBody from './dashBody.vue'
  import dashFooter from './dashFooter.vue'
  import { mapGetters, mapMutations, mapActions } from 'vuex'
  import * as types from 'src/dash/store/mutation-types'

  export default {
    name: 'dash',
    created () {
      window.onscroll = this.checkScrollIsBottom
      this.receivedDashFooter()
    },
    computed: {
      ...mapGetters({
        dashBodyLoading: types.GET_DASH_BODY_LOADING,
        dashFooter: types.GET_DASH_FOOTER,
        dashFooterDisp: types.GET_DASH_FOOTER_DISP
      })
    },
    methods: {
      checkScrollIsBottom (event) {
        let scrollIsBottom = ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight)
        if (this.dashFooterDisp !== scrollIsBottom) {
          this.setDashFooterDisp(scrollIsBottom)
        }
      },
      ...mapMutations({
        setDashFooterDisp: types.SET_DASH_FOOTER_DISP
      }),
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