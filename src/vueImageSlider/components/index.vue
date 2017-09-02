<template>
  <div name="image-sider">
    <p style="margin-left: 30px; cursor: pointer;">
      <a @click="prev">< Previous</a> || <a @click="next">Next ></a>
    </p>
    <div class="rslides" v-for="number in [currentNumber]" transition="fade">
      <a href="javascript:void(0)">
        <div @click="triggerDetail(photos[currentNumber].folder, photos[currentNumber].subFolder)">
          <img :src="photos[currentNumber].name"
               v-on:mouseover="stopRotation"
               v-on:mouseout="startRotation"
          />
        </div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'image-slider',
    data () {
      return {
        currentNumber: 0,
        timer: null
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
    ready () {
      this.startRotation()
    },
    methods: {
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
        console.log(this.currentNumber)
      },
      prev () {
        if (this.currentNumber <= 0) {
          this.currentNumber = this.photos.length - 1
        } else {
          this.currentNumber -= 1
        }
        console.log(this.currentNumber)
      }
    }
  }
</script>