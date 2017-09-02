<template>
  <div id="dash-body">
    <main>
      <div class="clearfix section-body font-size-body" id="index">
        <div id="loader" v-show="dashBodyLoadingCondition(dashBodyLoading, $route.name)">
          <div class="cssload-spinner"></div>
        </div>
        <span id="info-delete"></span>
        <router-view />
      </div>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'dash-body',
    props: {
      dashBodyLoading: {
        type: Boolean,
        default: true,
        width: 0,
        height: 0
      }
    },
    created () {
      window.addEventListener('resize', this.handleResize)
      this.handleResize()
    },
    methods: {
      handleResize () {
        this.width = window.innerWidth || 0
        this.height = Math.max(window.innerHeight, document.body.clientHeight) || 0
      },
      dashBodyLoadingCondition (dashBodyLoading, routeName) {
        let routeLoadings = [ 'home', 'personalI' ]
        // let routeLoadings = [ 'home', 'personalI', 'personalII', 'workI', 'workII' ]
        return dashBodyLoading && routeLoadings.indexOf(routeName) > -1
      }
    },
    beforeDestroy () {
      window.removeEventListener('resize', this.handleResize)
    }
  }
</script>
