<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-card-title class="headline">Welcome to Dami Avenue</v-card-title>
    </v-flex>
  </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  }
}
</script>
