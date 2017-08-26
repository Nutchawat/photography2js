<template>
  <div name="vue-perfect-layout" class="vuePerfectLayout">
    <div id="gallery">
      <template v-for="photoColumnsRow in photoColumnsRows">
        <template v-for="photoColumnRow in photoColumnsRow">
          <div v-if="typeof photoColumnRow.folder === 'undefined'" class="image"
               :style="photoColumnRow.style"
          />
          <div v-else class="image cursor-pointer"
               :style="photoColumnRow.style"
               @click="triggerDetail(photoColumnRow.folder)"
          />
        </template>
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
      },
      togglePage: {
        type: Function
      },
      receivedDetail: {
        type: Function
      }
    },
    created () {
      window.addEventListener('resize', this.perfectLayout)
      this.perfectLayout()
    },
    methods: {
      triggerDetail (folder) {
        this.togglePage('detail')
        this.receivedDetail(folder)
      },
      perfectLayout () {
        let windowWidth = document.documentElement.clientWidth || 0
        let windowHeight = document.documentElement.clientHeight || 0
        const perfectColumnsRows = perfectLayout(this.photoRaws, windowWidth - 47, windowHeight, {margin: 2})
        let photoColumnsRows = []
        let indexPhotoRaw = 0
        for (let indexRow = 0; indexRow < perfectColumnsRows.length; indexRow++) {
          let perfectColumnsRow = perfectColumnsRows[indexRow]
          let photoColumnsRow = []
          for (let indexColumn = 0; indexColumn < perfectColumnsRow.length; indexColumn++) {
            let folder = this.photoRaws[indexPhotoRaw].folder
            let perfectColumnRow = perfectColumnsRow[indexColumn]
            photoColumnsRow.push({
              style: {
                width: perfectColumnRow.width + 'px',
                height: perfectColumnRow.height + 'px',
                background: 'url(' + perfectColumnRow.src + ')',
                backgroundSize: 'cover'
              },
              folder: folder
            })
            indexPhotoRaw++
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