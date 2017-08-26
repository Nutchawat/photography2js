<template>
  <div id="dash-header">
    <nav v-show="adminDisp" class="navbar-default nav-admin" id="nav-admin">
      <div class="container-fluid">
        <div class="navbar-header">
          <router-link :to="{ name: 'home' }" class="navbar-brand">
            <span>{{ username }}</span>
          </router-link>
        </div>
        <ul class="nav navbar-nav pull-left">
          <li class="pull-left">
            <router-link :to="{ name: 'admin' }">
              <span>Upload</span>
            </router-link>
          </li>
          <li class="pull-left">
            <router-link :to="{ name: 'home' }">
              <span>Logout</span>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
    <nav class="clearfix section-header" id="section-header">
      <ul class="clearfix font-size-body topnav" :class="{ 'responsive' : mobileMenuDisp }">
        <li class="layout-left font-size-header">
          <router-link :to="{ name: 'home' }">
            <img alt="VVPHOTOGRAPHER" src="../../../static/img/Logo2017.svg" width="100" height="100">
            <!-- <span>vvpfoto</span> -->
          </router-link>
        </li>
        <li class="clearfix nav-column layout-right" :class="{ 'active-page' : $route.name === 'personalI' }">
          <router-link :to="{ name: 'personalI' }">
            <span>PERSONAL I</span>
          </router-link>
        </li>
        <li class="clearfix nav-column layout-right" :class="{ 'active-page' : $route.name === 'personalII' }">
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
        adminDisp: false,
        username: 'admin',
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