<template>
    <v-card>
      <v-card-title class="grey lighten-4 py-4 title">
        Register
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
                 :rules="[rules.name]"
                  hint="At least 3 characters"
                 required
               ></v-text-field>
               <v-flex xs12 sm12 d-flex>
                 <v-select
                    prepend-inner-icon="mdi-flag-triangle"
                    v-model="role"
                    :items="roles"
                    item-text="name"
                    return-object
                    label="Role"
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
              <br>
              <v-text-field
                prepend-inner-icon="mdi-lock"
                label="Password"
                :append-icon="showPass1 ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPass1 = !showPass1"
                :type="showPass1 ? 'text' : 'password'"
                hint="At least 8 characters"
                :rules="[rules.password]"
                v-model="password"
                loading
              >
                <template v-slot:progress>
                  <v-progress-linear
                    :value="progress"
                    :color="color"
                    height="2"
                  ></v-progress-linear>
                </template>
              </v-text-field>
              <br>
              <v-text-field
                prepend-inner-icon="mdi-lock"
                label="Confirm Password"
                :append-icon="showPass2 ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPass2 = !showPass2"
                :type="showPass2 ? 'text' : 'password'"
                v-model="comparePassword"
                :rules="passwordConfirmationRules"
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
          @click="singup"
          small round>
        <v-icon @click="singup" class="pr-2">mdi-content-save</v-icon> Save
        </v-btn>
      </v-card-actions>
      <helper-alert :error="error" />
    </v-card>
</template>

<script>
import AuthenticationService from '@/api/AuthenticationService'
import UserRoleService from '@/api/UserRoleService'
import { mapState } from 'vuex'

export default {
  data () {
    return {
      showPass1: false,
      showPass2: false,
      name: '',
      email: '',
      password: '',
      comparePassword: '',
      role: {},
      error: null,
      roles: [],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^\w+((\.-)?\w+)*@\w+((\.-)?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        // v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      rules: {
        name: v=> v.length >= 3 || 'Min 3 characters',
        password: v => v.length >= 8 || 'Min 8 characters'
      },
      passwordConfirmationRules: [
        (v) => !!v || 'Confirmation Password is required',
        (v) => v == this.password || 'Password must match'
      ]
    }
  },
  created () {
      this.getUserRole ()
  },
  computed: {
    ...mapState([
      'user'
    ]),
    progress () {
        return Math.min(100, this.password.length * 10)
      },
    color () {
      return ['error', 'warning', 'success'][Math.floor(this.progress / 40)]
    }
    
  },
  methods: {
    async getUserRole () {
      this.roles = (await UserRoleService.index()).data.roles
    },
    async singup () {
      try {
        await AuthenticationService.register({
          name: this.name,
          email: this.email,
          password: this.password,
          school: this.user.school._id,
          role: this.role._id
        })
        this.name = ''
        this.email = ''
        this.password = ''
        this.role = ''
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
