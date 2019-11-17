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
                v-model="student.name"
                :disabled="!isEdit"
               ></v-text-field>
              <v-text-field
                label="Father Name"
                required
                v-model="student.fatherName"
                :disabled="!isEdit"
               ></v-text-field>
              <v-text-field
                label="Mother Name"
                required
                v-model="student.motherName"
                :disabled="!isEdit"
               ></v-text-field>
          </v-flex>
          <v-flex xs12 sm5 offset-sm1>
            <v-alert
              :value="error != null"
              color="error"
              icon="warning"
              outline
              dismissible
            > 
              <div v-html="error" />
            </v-alert>
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
    </v-card>
</template>

<script>
import StudentService from '@/api/StudentService'
import { mapState } from 'vuex'

export default {
  data () {
    return {
      title_name: "Basic Info",
      isEdit: false,
      error: null,
      student: ''
    }
  },
  computed: {
    ...mapState([
        'user'
    ])
  },
  created () {
      this.getStudent ()
  },
  methods: {
    async getStudent () {
      this.student = (await StudentService.show(this.$route.params._id)).data.student
    },
    edit () {
      this.isEdit = true
    },
    async update () {
      try {
        this.student.updated_user = this.user._id
        await StudentService.put(this.student)
        this.getStudent ()
        this.isEdit = false
      } catch (err) {
        this.error = err.response.data.error
      }
    }
  }
}
</script>
<style scoped>
</style>
