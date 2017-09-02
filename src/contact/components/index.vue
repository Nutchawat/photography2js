<template>
  <div class="section-contact">
    <div class="section-contact-left">
      <div class="text-contact-header">{{ contact.head }}</div>
    </div>
    <div class="section-contact-right">
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <p>&nbsp;&nbsp;&nbsp;E-mail : <a :href="'mailto:' + contact.email">{{ contact.email }}</a></p>
      <p>&nbsp;&nbsp;&nbsp;Tel : <a :href="'tel:' + contact.tel1">{{ contact.tel1 }}</a> {{ contact.tel1_desc }}</p>
      <p>&nbsp;&nbsp;&nbsp;Tel : <a :href="'tel:' + contact.tel2">{{ contact.tel2 }}</a> {{ contact.tel2_desc }}</p>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import * as types from '../store/mutation-types'

  export default {
    name: 'contact',
    created () {
      this.receivedContact()
    },
    computed: {
      ...mapGetters({
        contact: types.GET_CONTACT
      })
    },
    methods: {
      ...mapActions({
        receivedContact: types.RECEIVED_CONTACT
      })
    }
  }
</script>