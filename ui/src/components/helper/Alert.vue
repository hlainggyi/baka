<template>
    <v-snackbar
      v-model="snackbar"
      :color="color"
      multi-line
      :timeout="timeout"
      top
      right
    >
      <v-icon
        color="white"
        class="mr-3"
      >
        mdi-bell-alert
      </v-icon>
      {{ error }}
      <v-btn
        mt-0
        dark
        flat
        small
        round
        @click="snackbar = false"
      >
        <v-icon small style="padding-bottom: 50px;
    margin-right: -35px;">mdi-close-circle</v-icon>
      </v-btn>
    </v-snackbar>
</template>

<script>
  export default {
    props: ['error'],
    computed: {
      snackbar: {
        // getter
        get: function () {
          return this.error
        },
        // setter
        set: function (newValue) {
          return this.error
        }
      }
    },
    data () {
      return {
        mode: '',
        timeout: 6000,
        color: 'error'
      }
    }
  }
</script>