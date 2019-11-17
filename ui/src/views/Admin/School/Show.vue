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
                prepend-inner-icon="mdi-check"
                label="School Name"
                required
                v-model="school.name"
                :disabled="!isEdit"
               ></v-text-field>
              <v-text-field
                prepend-inner-icon="mdi-check"
                label="Slogram"
                required
                v-model="school.slogram"
                :disabled="!isEdit"
               ></v-text-field>
              <v-text-field
                prepend-inner-icon="mdi-check"
                label="Description"
                type="text"
                v-model="school.description"
                :disabled="!isEdit"
              ></v-text-field>
              <v-flex xs12 sm12 d-flex>
                <v-select
                  prepend-inner-icon="mdi-flag-triangle"
                  v-model="school.level"
                  :items="levels"
                  item-text="name"
                  item-value="_id"
                  return-object
                  label="School Level"
                  :disabled="!isEdit"
                >
                </v-select>
              </v-flex>
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
import SchoolService from '@/api/SchoolService'
import SchoolLevelService from '@/api/SchoolLevelService'

export default {
  data () {
    return {
      title_name: "Basic Info",
      isEdit: false,
      levels: [],
      error: null,
      school: []
    }
  },
  created () {
    this.getSchool (),
    this.getSchoolLevel ()
  },
  methods: {
    async getSchoolLevel () {
      this.levels = (await SchoolLevelService.index()).data.schoolLevels
    },
    async getSchool () {
      this.school = (await SchoolService.show(this.$route.params._id)).data.school
    },
    edit () {
      this.isEdit = true
    },
    async update () {
      try {
        await SchoolService.put(this.school)
        this.getSchool ()
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
