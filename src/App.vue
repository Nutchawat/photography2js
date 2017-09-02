<template>
  <div class="app">
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'app',
    created () {
      window.addEventListener('contextmenu', this.disabledLightGalleryRightClick)
    },
    methods: {
      disabledLightGalleryRightClick (event) {
        var lightGalleryElements = document.getElementsByClassName('lg-object')
        if (lightGalleryElements.length > 0) {
          event.preventDefault()
        }
      }
    },
    beforeDestroy () {
      window.removeEventListener('contextmenu', this.disabledLightGalleryRightClick)
    }
  }
</script>

<style src="./style.scss" lang="scss">
</style>