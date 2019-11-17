<template>
      <div>
        <v-app id="inspire" v-if="isUserLoggedIn">
          <!-- <navigation></navigation>
          <toolbar></toolbar> -->
        <navigation :mini="mini" :drawer="drawer" v-on:navigater="mini = !mini"></navigation>
        <toolbar :mini="mini" v-on:navigater="mini = !mini"></toolbar>
          <v-content>
            <v-container fluid>
              <transition  name="fade" mode="out-in">
                <router-view />
              </transition>
            </v-container>
          </v-content>
        </v-app>
        <v-app v-if="!isUserLoggedIn">
          <transition  name="fade" mode="out-in">
            <v-toolbar class="elevation-0 v-toolbar--clipped" fixed app dark height="58" id="app-toolbar" color="primary" v-if="showToolbar">
                <v-avatar>
                  <v-img :src="require('./assets/baka-logo.jpg')" />
                </v-avatar>
              <v-toolbar-title>Title</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-toolbar-items class="hidden-sm-and-down">
                <v-btn flat @click="$router.push('login')">Login</v-btn>
                <v-btn flat @click="$router.push({name: 'register'})">Register</v-btn>
                <v-btn flat>Link Three</v-btn>
              </v-toolbar-items>
            </v-toolbar>
          </transition>
          <v-content>
            <transition  name="fade" mode="out-in">
              <router-view />
            </transition>
          </v-content>
      </v-app>
    </div>
</template>

<script>
  import { mapState } from 'vuex'
  import Navigation from '@/views/Dashboard/Layout/Navigation.vue'
  import Toolbar from '@/views/Dashboard/Layout/Toolbar.vue'
  export default {
    data: () => ({
      drawer: true,
      mini: false
    }),
    components: { Navigation, Toolbar },
    props: {
      source: String
    },
    computed: {
      ...mapState({
      app: state => state.app,
      user: state => state.user,
      isUserLoggedIn: state => state.isUserLoggedIn
      }),
      showToolbar() {
        return this.$route.name != 'login'
      }
    },
    methods: {
      logout () {
        this.$store.dispatch('setToken', null)
        this.$store.dispatch('setUser', null)
        this.$store.dispatch('setSchool', null)
        this.$router.push({
          name: 'home'
        })
      }
    }
  }
</script>

<style lang="scss">
  @import '@/styles/index.scss';
</style>
