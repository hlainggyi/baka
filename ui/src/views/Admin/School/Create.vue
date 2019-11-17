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
                v-model="name"
               ></v-text-field>
              <v-text-field
                prepend-inner-icon="mdi-check"
                label="Slogram"
                required
                v-model="slogram"
               ></v-text-field>
              <br>
              <v-text-field
                prepend-inner-icon="mdi-check"
                label="Description"
                type="text"
                v-model="description"
              ></v-text-field>
              <v-flex xs12 sm12 d-flex>
                <v-select
                  prepend-inner-icon="mdi-flag-triangle"
                  v-model="level"
                  :items="levels"
                  item-text="name"
                  return-object
                  label="School Level"
                >
                </v-select>
              </v-flex>
              <v-text-field
                 prepend-inner-icon="mdi-email"
                 label="E-mail"
                 v-model="email"
                 :rules="emailRules"
                 required
               ></v-text-field>
          </v-flex>
          
        </v-layout>
      </v-container>
      <v-card-actions>
        <v-btn
          color="primary"
          @click="create"
          small
          round>
        <v-icon class="pr-2">mdi-content-save</v-icon>Save
        </v-btn>
      </v-card-actions>
      <helper-alert :error="error" />
    </v-card>
</template>

<script>
import SchoolService from '@/api/SchoolService'
import SchoolLevelService from '@/api/SchoolLevelService'

export default {
  data () {
    return {
      title_name: "Basic Info",
      name: '',
      slogram: '',
      description: '',
      email: '',
      level: '',
      levels: [],
      error: null,
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^\w+((\.-)?\w+)*@\w+((\.-)?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        // v => /.+@.+/.test(v) || 'E-mail must be valid'
      ]
    }
  },
  created() {
    this.getSchoolLevel ()
  },
  methods: {
    async getSchoolLevel () {
      this.levels = (await SchoolLevelService.index()).data.schoolLevels
    },
    async create () {
      try {
        await SchoolService.post({
          name: this.name,
          slogram: this.slogram,
          description: this.description,
          email: this.email
        })
        this.name = null,
        this.slogram = null,
        this.description = null
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
