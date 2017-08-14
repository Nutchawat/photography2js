<template>
  <div name="image-sider">
    <p>
      <a @click="prev">Previous</a> || <a @click="next">Next</a>
    </p>
    <div class="rslides" v-for="number in [currentNumber]" transition="fade">
      <img :src="imagePath + images[Math.abs(currentNumber) % images.length]"
           v-on:mouseover="stopRotation"
           v-on:mouseout="startRotation" />
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
      imagePath: {
        type: String,
        default: ''
      },
      images: {
        type: Array,
        required: true
      }
    },
    ready () {
      this.startRotation()
    },
    methods: {
      startRotation () {
        this.timer = setInterval(this.next, 3000)
      },
      stopRotation () {
        clearTimeout(this.timer)
        this.timer = null
      },
      next () {
        this.currentNumber += 1
      },
      prev () {
        this.currentNumber -= 1
      }
    }
  }
</script>