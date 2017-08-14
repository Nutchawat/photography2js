<template>
  <div name="vue-perfect-layout" class="vuePerfectLayout">
    <div id="gallery">
      <template v-for="photoColumnsRow in photoColumnsRows">
        <div v-for="photoColumnRow in photoColumnsRow" class="image" :style="photoColumnRow.style"></div>
      </template>
    </div>
  </div>
</template>

<script>
  import perfectLayout from 'src/../node_modules/perfect-layout/dist/perfectLayout.js'

  export default {
    name: 'vue-perfect-layout',
    data () {
      return {
        photoColumnsRows: [[{}]],
        photoRaws: this.photos
      }
    },
    watch: {
      photos (newVal) {
        this.photoRaws = newVal
        this.perfectLayout()
      }
    },
    props: {
      photos: {
        type: Array,
        required: true,
        default () {
          return [{ src: '', ratio: 1 }]
        }
      }
    },
    created () {
      window.addEventListener('resize', this.perfectLayout)
      this.perfectLayout()
    },
    methods: {
      perfectLayout () {
        let windowWidth = document.documentElement.clientWidth || 0
        let windowHeight = document.documentElement.clientHeight || 0
        const perfectColumnsRows = perfectLayout(this.photoRaws, windowWidth - 47, windowHeight, {margin: 2})
        let photoColumnsRows = []
        for (let indexRow = 0; indexRow < perfectColumnsRows.length; indexRow++) {
          let perfectColumnsRow = perfectColumnsRows[indexRow]
          let photoColumnsRow = []
          for (let indexColumn = 0; indexColumn < perfectColumnsRow.length; indexColumn++) {
            let perfectColumnRow = perfectColumnsRow[indexColumn]
            photoColumnsRow.push({
              style: {
                width: perfectColumnRow.width + 'px',
                height: perfectColumnRow.height + 'px',
                background: 'url(' + perfectColumnRow.src + ')',
                backgroundSize: 'cover'
              }
            })
          }
          photoColumnsRows.push(photoColumnsRow)
        }
        this.photoColumnsRows = photoColumnsRows
      }
    },
    beforeDestroy () {
      window.removeEventListener('resize', this.perfectLayout)
    }
  }
</script>

<style lang="scss">
.vuePerfectLayout {
  #gallery {
    padding: 6px;
    overflow: hidden;
  }

  .image {
    position: relative;
    float: left;
    margin: 2px;
  }
}
</style>