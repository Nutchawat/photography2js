<template>
  <div id="dash-footer">
    <div class="font-style font-size-body section-footer">
      <div class="pull-left">© COPYRIGHT 2019 BY VV PHOTOGRAPHER</div>
      <div class="section-right">
        <div class="pull-left nav-footer">
          <i class="fa fa-facebook-square" aria-hidden="true" @click="openNewWindow(dashFooter.facebook)"></i>&nbsp;
          <span id="text-footer"><a :href="dashFooter.facebook" target="_blank">Facebook&nbsp;</a></span>|&nbsp;
        </div>
        <div class="pull-left nav-footer">
          <i class="fa fa-instagram" aria-hidden="true" @click="openNewWindow(dashFooter.instagram)"></i>&nbsp;
          <span id="text-footer"><a :href="dashFooter.instagram" target="_blank">Instagram&nbsp;</a></span>|&nbsp;
        </div>
        <!-- <div class="pull-left nav-footer">
          <i class="fa fa-flickr" aria-hidden="true" @click="openNewWindow(dashFooter.flickr)"></i>&nbsp;
          <span id="text-footer"><a :href="dashFooter.flickr" target="_blank">Flickr&nbsp;</a></span>|&nbsp;
        </div> -->
        <div class="pull-left nav-footer">
          <i class="fa fa-envelope-o" aria-hidden="true" @click="sendEmail(dashFooter.email)"></i>&nbsp;
          <span id="text-footer"><a :href="'mailto:' + dashFooter.email">Email&nbsp;</a></span>&nbsp;
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'dash-footer',
    props: [ 'dashFooter' ],
    methods: {
      openNewWindow (url) {
        window.open(url, '_blank')
      },
      sendEmail (email) {
        window.open('mailto:' + email)
      }
    }
  }
</script>