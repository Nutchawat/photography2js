<template>
  <div name="lightGalleryTest" id="lightgallery">
    <a href="/static/img/HOME/8496636515_ca9ef2a464_o.jpg">
      <img src="/static/img/HOME/8496636515_ca9ef2a464_o.jpg" />
    </a>
    <a href="/static/img/HOME/7899651992_b09e5c1244_o.jpg">
      <img src="/static/img/HOME/7899651992_b09e5c1244_o.jpg" />
    </a>
  </div>
  </div>
</template>

<script>
  import $ from 'jquery'

  export default {
    name: 'lightGalleryTest',
    mounted () {
      require(['lightgallery'], function () {
        require(['lg-fullscreen', 'lg-thumbnail'], function () {
          $('#lightgallery').lightGallery({
            thumbnail: true,
            download: false,
            showThumbByDefault: false
          })
        })
      })
    }
  }
</script>