<template>
  <div name="image-sider">
    <p style="margin: 0px 0px 0px 30px; padding: 0px 0px 0px 0px; cursor: pointer;">
      <a @click="prev">< Previous</a> || <a @click="next">Next ></a>
    </p>
    <div class="rslides" v-for="number in [currentNumber]" transition="fade">
      <div  :style="{
              position: 'relative',
              height: divHeight,
              width: divWidth
            }">
        <transition name="bounce">
          <img :src="photos[currentNumber].name"
               @mouseover="stopRotation"
               @mouseout="startRotation"
               @contextmenu="disabledRightClick"
               @click="triggerDetail(photos[currentNumber].folder, photos[currentNumber].subFolder)"
               :style="{
                 height: imgHeight,
                 width: imgWidth,
                 position: 'absolute',
                 top: 0,
                 left: 0,
                 right: 0,
                 margin: 'auto',
                 cursor: 'pointer'
               }"
          />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'image-slider',
    data () {
      return {
        currentNumber: 0,
        timer: null,
        width: 0,
        height: 0,
        divWidth: '',
        divHeight: '',
        imgWidth: '',
        imgHeight: ''
      }
    },
    props: {
      photos: {
        type: Array,
        required: true
      },
      togglePage: {
        type: Function
      },
      receivedDetail: {
        type: Function
      }
    },
    created () {
      window.addEventListener('resize', this.handleResize)
      this.handleResize()
    },
    mounted () {
      this.startRotation()
    },
    methods: {
      disabledRightClick (event) {
        event.preventDefault()
      },
      handleResize () {
        this.width = window.innerWidth || 0
        this.height = window.innerHeight || 0
        this.divHeight = (this.width > this.height) ? 0.68 * this.height + 'px' : 0.68 * this.height + 'px'
        this.divWidth = (this.width > this.height) ? '100%' : this.width + 'px'
        this.imgHeight = (this.width > this.height) ? 0.68 * this.height + 'px' : 'auto'
        this.imgWidth = (this.width > this.height) ? 'auto' : this.width + 'px'
      },
      triggerDetail (folder, subFolder) {
        this.togglePage('detail')
        this.receivedDetail({ folder: folder, subFolder: subFolder })
      },
      startRotation () {
        this.timer = setInterval(this.next, 3000)
      },
      stopRotation () {
        clearTimeout(this.timer)
        this.timer = null
      },
      next () {
        if (this.currentNumber >= this.photos.length - 1) {
          this.currentNumber = 0
        } else {
          this.currentNumber += 1
        }
      },
      prev () {
        if (this.currentNumber <= 0) {
          this.currentNumber = this.photos.length - 1
        } else {
          this.currentNumber -= 1
        }
      }
    },
    beforeDestroy () {
      window.removeEventListener('resize', this.handleResize)
    }
  }
</script>