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
                label="Name"
                required
                v-model="teacher.name"
                :disabled="!isEdit"
               ></v-text-field>
              <v-text-field
                label="Position"
                required
                v-model="teacher.position"
                :disabled="!isEdit"
               ></v-text-field>
              <br>
              <v-text-field
                label="NRC"
                type="text"
                v-model="teacher.nrc"
                :disabled="!isEdit"
              ></v-text-field>
              <br>        
          </v-flex>
        </v-layout>
      </v-container>
      <v-card-actions>
        <!-- <v-spacer></v-spacer> -->
        <v-btn
          @click="edit"
          v-if="!isEdit"
          small
          round>
        <v-icon class="pr-2">mdi-circle-edit-outline</v-icon>Edit
        </v-btn>
        <v-btn
          color="primary"
          @click="update"
          v-if="isEdit"
          small
          round>
        <v-icon class="pr-2">mdi-update</v-icon>Update
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
      title_name: "Basic Info",
      isEdit: false,
      error: null,
      teacher: ''
    }
  },
  computed: {
    ...mapState([
        'user'
    ])
  },
  created () {
      this.getTeacher ()
  },
  methods: {
    async getTeacher () {
      this.teacher = (await TeacherService.show(this.$route.params._id)).data.teacher
    },
    edit () {
      this.isEdit = true
    },
    async update () {
      try {
        await TeacherService.put(this.teacher)
        this.getTeacher ()
        this.isEdit = false
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
</style>
