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
                 prepend-inner-icon="mdi-account-star"
                 label="Name"
                 v-model="name"
                 required
               ></v-text-field>
              <v-text-field
                 prepend-inner-icon="mdi-account"
                 label="Father Name"
                 v-model="fatherName"
                 required
               ></v-text-field>
              <v-text-field
                 prepend-inner-icon="mdi-account"
                 label="Mother Name"
                 v-model="motherName"
                 required
               ></v-text-field>
              <v-flex xs12 sm12 d-flex>
                <v-select
                  prepend-inner-icon="mdi-star-outline"
                  v-model="startGrade"
                  :items="grades"
                  item-text="name"
                  return-object
                  label="Start-Grade"
                >
                </v-select>
              </v-flex>
              <v-flex xs12 sm12 d-flex>
                <v-select
                  prepend-inner-icon="mdi-star"
                  v-model="passGrade"
                  :items="grades"
                  item-text="name"
                  return-object
                  label="Pass-Grade"
                >
                </v-select>
              </v-flex>
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
import StudentService from '@/api/StudentService'
import GradeService from '@/api/GradeService'
import { mapState } from 'vuex'

export default {
  data () {
    return {
      title_name: "New Student",
      name: '',
      fatherName: '',
      motherName: '',
      startGrade: '',
      passGrade: '',
      grades: [],
      error: null
    }
  },
  created() {
    this.getGrade()
  },
  computed: {
    ...mapState([
        'user'
    ])
  },
  methods: {
    async getGrade () {
        this.grades = (await GradeService.index()).data.grades
    },
    async create () {
      try {
        await StudentService.post({
          name: this.name,
          fatherName: this.fatherName,
          motherName: this.motherName,
          school: this.user.school,
          startGrade: this.startGrade._id,
          passGrade: this.passGrade._id,
          createdUser: this.user._id,
          updatedUser: this.user._id
        })
        this.name = ''
        this.fatherName = ''
        this.dob = ''
        this.$router.back()
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
</style>
