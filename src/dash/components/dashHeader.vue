<template>
  <div id="dash-header" class="dash-header">
    <nav class="clearfix section-header" id="section-header">
      <ul class="clearfix font-size-body topnav" :class="{ 'responsive' : mobileMenuDisp }">
        <li class="layout-left font-size-header">
          <router-link :to="{ name: 'home' }">
            <img alt="VVPHOTOGRAPHER" src="../../../static/img/Logo2017.svg" width="100" height="100">
            <!-- <span>vvpfoto</span> -->
          </router-link>
        </li>
        <li class="clearfix nav-column layout-right -personal1" :class="{ 'active-page' : $route.name === 'personalI' }">
          <router-link :to="{ name: 'personalI' }">
            <span>PERSONAL I</span>
          </router-link>
        </li>
        <li class="clearfix nav-column layout-right -personal2" :class="{ 'active-page' : $route.name === 'personalII' }">
          <router-link :to="{ name: 'personalII' }">
            <span>PERSONAL II</span>
          </router-link>
        </li>
        <li class="clearfix nav-column layout-right" :class="{ 'active-page' : $route.name === 'workI' }">
          <router-link :to="{ name: 'workI' }">
            <span>WORK I</span>
          </router-link>
        </li>
        <li class="clearfix nav-column layout-right" :class="{ 'active-page' : $route.name === 'workII' }">
          <router-link :to="{ name: 'workII' }">
            <span>WORK II</span>
          </router-link>
        </li>
        <li class="clearfix nav-column layout-right" :class="{ 'active-page' : $route.name === 'bio' }">
          <router-link :to="{ name: 'bio' }">
            <span>Bio</span>
          </router-link>
        </li>
        <li class="clearfix nav-column layout-right" :class="{ 'active-page' : $route.name === 'contact' }">
          <router-link :to="{ name: 'contact' }">
            <span>Contact</span>
          </router-link>
        </li>
        <li class="clearfix icon">
          <a href="javascript:void(0);" @click="toggleMobileMenuDisp()">☰</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'dash-header',
    data () {
      return {
        mobileMenuDisp: false
      }
    },
    methods: {
      toggleMobileMenuDisp () {
        this.mobileMenuDisp = !this.mobileMenuDisp
      }
    }
  }
</script>

<style lang="scss">
  #dash-header {
    .-personal1 {
      margin-right: 35px;
    }
    .-personal2 {
      margin-right: 20px;
    }
  }
</style>