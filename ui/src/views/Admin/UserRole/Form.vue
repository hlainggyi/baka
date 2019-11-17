<template>
  <div>
    <v-card>
      <v-card-title class="grey lighten-4 py-4 title">
        Register
      </v-card-title>
      <v-container grid-list-sm class="pa-4">
        <v-layout row wrap>

          <v-flex xs11 offset-xs1>
              <v-text-field
                 prepend-inner-icon="person"
                 label="Name"
                 v-model="name"
                 required
               ></v-text-field>
               <v-flex xs12 sm12 d-flex>
                 <v-select
                   prepend-inner-icon="flag"
                   v-model="role"
                   :items="roles"
                   label="Role"
                 >
                 </v-select>
               </v-flex>
              <v-text-field
                 prepend-inner-icon="email"
                 label="E-mail"
                 v-model="email"
                 :rules="emailRules"
                 required
               ></v-text-field>
              <br>
              <v-text-field
                prepend-inner-icon="lock"
                label="Password"
                type="password"
                v-model="password"
              ></v-text-field>
              <br>
              <div class="danger-alert" v-html="error" />
              <br>
              <v-btn
                dark
                class="green darken-2"
                @click="singup">
                Sing up
              </v-btn>
              <v-btn
                dark
                class="grey darken-2"
                @click.stop="$emit('cancel')">
                Cancel
              </v-btn>
              <v-spacer></v-spacer>
              <button @click="register = false"> <v-subheader>Sing in</v-subheader> </button>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import AuthenticationService from '@/api/AuthenticationService'

export default {
  data () {
    return {
      name: '',
      email: '',
      password: '',
      role: '',
      roles: ['admin', 'manager', 'editer', 'user'],
      emailRules: [
         (v) => !!v || 'E-mail is required',
         (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
       ],
      error: null
    }
  },
  methods: {
    async singup () {
      try {
        const response = await AuthenticationService.register({
          name: this.name,
          email: this.email,
          password: this.password,
          role: this.role
        })
        this.name = null
        this.email = null
        this.password = null
        this.role = null
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
</style>
