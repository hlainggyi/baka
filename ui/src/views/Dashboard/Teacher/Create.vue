<template>
    <v-card>
      <v-card-title class="grey lighten-4 py-4 title">
        {{ title_name }}
        <v-spacer></v-spacer>
          <v-icon @click="$router.back()" color="error">mdi-close-circle</v-icon>
      </v-card-title>
      <v-container grid-list-sm class="pa-4">
        <v-layout row wrap>
          <v-flex xs12 sm6>
              <v-text-field
                 prepend-inner-icon="mdi-account"
                 label="Name"
                 v-model="name"
                 required
               ></v-text-field>
              <v-text-field
                 prepend-inner-icon="mdi-account"
                 label="Position"
                 v-model="position"
                 required
               ></v-text-field>
              <br>
              <v-text-field
                prepend-inner-icon="mdi-update"
                label="NRC"
                type="text"
                v-model="nrc"
              ></v-text-field>
              <br>        
          </v-flex>
        </v-layout>
      </v-container>
      <v-card-actions>
        <!-- <v-spacer></v-spacer> -->
        <v-btn
          dark
          class="primary"
          @click="create"
          small
          round>
        <v-icon class="pr-2">mdi-content-save</v-icon> Save
        </v-btn>
      </v-card-actions>
      <helper-alert :error="error" />
    </v-card>
</template>

<script>
import TeacherService from '@/api/TeacherService'
import { mapState } from 'vuex'

export default {
  data () {
    return {
      title_name: "New Teacher",
      name: '',
      position: '',
      nrc: '',
      error: null
    }
  },
  computed: {
    ...mapState([
        'user'
    ])
  },
  methods: {
    async create () {
      try {
        await TeacherService.post({
          name: this.name,
          position: this.position,
          nrc: this.nrc,
          school: this.user.school._id
        })
        this.name = null
        this.position = null
        this.nrc = null
        this.$router.back()
      } catch (err) {
        this.error = err.response.data.error
      }
    }
  }
}
</script>

<style scoped>
</style>
