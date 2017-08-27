<template>
  <div name="vue-light-gallery" class="vuePerfectLayout">
    <div @click="togglePage('index')" style="margin-left: 30px; cursor: pointer;"><< Back</div>
    <div id="gallery" class="vueLightGallery">
      <template v-for="photoColumnsRow in photoColumnsRows">
        <template v-for="photoColumnRow in photoColumnsRow">
          <a :href="photoColumnRow.src">
            <div class="image">
              <img :src="photoColumnRow.src"
                   :style="photoColumnRow.style" />
            </div>
          </a>
        </template>
      </template>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  import perfectLayout from 'src/../node_modules/perfect-layout/dist/perfectLayout.js'

  export default {
    name: 'vue-light-gallery',
    data () {
      return {
        photoColumnsRows: [],
        photoRaws: this.photos
      }
    },
    watch: {
      photos (newVal) {
        this.photoRaws = newVal
        this.perfectLayout()
        this.$nextTick(function () {
          this.lightGallery()
        })
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
      lightGallery () {
        let lg = $('.vueLightGallery')
        if (typeof lg.data('lightGallery') !== 'undefined') {
          lg.data('lightGallery').destroy(true)
        }
        lg.lightGallery({
          thumbnail: true,
          download: false,
          showThumbByDefault: false
        })
      },
      perfectLayout () {
        let windowWidth = document.documentElement.clientWidth || 0
        let windowHeight = document.documentElement.clientHeight || 0
        const perfectLayoutResult = perfectLayout(this.photoRaws, windowWidth - 47, windowHeight, {margin: 2})
        let perfectColumnsRows = []
        if (Array.isArray(perfectLayoutResult[0])) {
          perfectColumnsRows = perfectLayoutResult
        } else {
          perfectColumnsRows.push(perfectLayoutResult)
        }
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
              folder: folder,
              src: perfectColumnRow.src
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