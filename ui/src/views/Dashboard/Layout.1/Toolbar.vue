<template>
  <div>
    <!-- <v-toolbar color="light-blue darken-1" dark app fixed class="elevation-2"> -->
    <v-toolbar color="primary" dark app fixed class="elevation-2">
      <v-toolbar-title style="width: 300px">
        <v-toolbar-side-icon>
          <v-icon v-show="app.mini">mdi-menu</v-icon>
          <v-icon v-show="!app.mini">mdi-dots-vertical</v-icon>
        </v-toolbar-side-icon>
        <span class="hidden-sm-and-down">Home</span>
      </v-toolbar-title><v-spacer></v-spacer>
      <v-btn icon>
        <v-offline
          online-class="online"
          offline-class="offline"
          @detected-condition="amIOnline">
        </v-offline>
        <v-icon v-if="onLine == true">mdi-wifi</v-icon>
        <v-icon v-if="onLine != true">mdi-wifi-off</v-icon>
      </v-btn>
      <v-btn icon @click="$router.push({name: 'onoff'})">
        <v-icon>mdi-bell</v-icon>
      </v-btn>
      <v-btn icon @click="logout">
        <v-icon>mdi-logout-variant</v-icon>
      </v-btn>
      <v-btn icon large v-if="$store.state.isUserLoggedIn">
        <v-avatar size="32px" tile>
          <img src="../../../assets/default.png" :alt="$store.state.user.email">
        </v-avatar>
      </v-btn>
    </v-toolbar>
  </div>
</template>
<script>
import {mapState} from 'vuex'
import VOffline from 'v-offline';
export default {
  components: {
    VOffline
  },
  data () {
    return {
      onLine: null
    }
  },
  computed: {
    ...mapState({
    app: state => state.app,
    user: state => state.user,
    isUserLoggedIn: state => state.isUserLoggedIn
    })
  },
  methods: {
    // ...mapMutations([
		// 	'toggleMini'
		// ]),
    amIOnline(e) {
      this.onLine = e;
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      // this.$store.dispatch('setRole', null)
      // this.$store.dispatch('setSchool', null)
      this.$router.push({
        name: 'home'
      })
    }
  }
}
</script>
