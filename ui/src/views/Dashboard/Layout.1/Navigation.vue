<template>
  <div>
    <v-navigation-drawer
    class="elevation-3"
    :mini-variant.sync="app.mini"
    v-model="app.drawer"
    hide-overlay
    stateless
    enable-resize-watcher
    app
    dark
    style="background-color:#262f3d;">
    
    <!-- <v-navigation-drawer
    v-model="drawer"
    :mini-variant.sync="mini"
    hide-overlay
    stateless
    app
    dark
    style="background-color:#262f3d;"> -->
    <v-toolbar flat style="background-color:#262f3d;">
     <v-list v-if="app.mini">
       <v-list-tile avatar>
         <!-- <v-img @click.stop="$emit('navigater')" :src="require('../../../assets/baka-logo.jpg')" /> -->
         <v-img @click.stop="$emit('navigater')">
           <img src="../../../assets/baka-logo.jpg" class="logo-img">
           <!-- <img src="../../../assets/logo.png" class="logo-img"> -->
         </v-img>
       </v-list-tile>
     </v-list>
     <v-list v-if="!app.mini">
       <v-list-tile avatar>
         <!-- <v-img :src="require('../../../assets/baka-logo.jpg')" /> -->
         <v-img>
           <img src="../../../assets/baka-logo.jpg" class="logo-img">
           <!-- <img src="../../../assets/logo.png" class="logo-img"> -->
         </v-img>
         <v-list-tile-content>
           <v-list-tile-title class="title">{{ title }}</v-list-tile-title>
         </v-list-tile-content>
         <v-list-tile-action>
           <v-btn
             icon
           >
             <v-icon>mdi-chevron-left</v-icon>
           </v-btn>
         </v-list-tile-action>
       </v-list-tile>
     </v-list>
   </v-toolbar>

   <v-divider></v-divider>
      <v-list class="pt-0" dense>
        <template v-for="item in items">
            <v-layout
              v-if="item.heading"
              :key="item.heading"
              row
              align-center
            >
              <v-flex xs6>
                <v-subheader v-if="item.heading">
                  {{ item.heading }}
                </v-subheader>
              </v-flex>
              <v-flex xs6 class="text-xs-center">
                <a href="#!" class="body-2 black--text">EDIT</a>
              </v-flex>
            </v-layout>
            <v-list-group
              v-else-if="item.children"
              v-model="item.model"
              :key="item.text"
              prepend-icon="mdi-account-key"
            >
              <v-list-tile slot="activator">
                <v-list-tile-content>
                  <v-list-tile-title>
                    {{ item.text }}
                  </v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-list-tile
                v-for="(child, i) in item.children"
                :key="i"
                @click="$router.push({ name: `${child.route}` })"
              >
                <v-list-tile-action v-if="child.s_text">
                  {{ child.s_text }}
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>
                    {{ child.text }}
                  </v-list-tile-title>                  
                </v-list-tile-content>
                <v-list-tile-action v-if="child.icon">
                  <!-- <v-icon>{{ child.icon }}</v-icon> -->
                </v-list-tile-action>
              </v-list-tile>
            </v-list-group>
            <v-list-tile v-else :key="item.text" @click="$router.push({
                      name: `${item.route}`
                    })">
              <v-list-tile-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ item.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  data () {
    return {
      title: 'BAKA EDU',
      logoURL: '../../../assets/baka-logo.jpg',
      items: [{
          icon: 'mdi-view-dashboard',
          text: 'Dashboard',
          route: 'dashboard'
        },
        {
          icon: 'mdi-account-circle',
          text: 'Users',
          route: 'users'
        },
        {
          icon: 'mdi-account-box',
          text: 'Teachers',
          route: 'teachers'
        },
        {
          icon: 'mdi-account-card-details-outline',
          text: 'Students',
          route: 'students'
        },
        {
          icon: 'mdi-account-card-details-outline',
          text: 'Academic Students',
          route: 'academic-students'
        },
        {
          icon: 'mdi-chevron-up',
          'icon-alt': 'mdi-chevron-down',
          text: 'Admin',
          model: false,
          children: [{
              // icon: 'contacts',
              s_text: 'SL',
              text: 'School List',
              route: 'schools'
            },
            {
              // icon: 'flag',
              s_text: 'UR',
              text: 'User Role',
              route: 'user-roles'
            }
          ]
        },
        {
          icon: 'mdi-settings',
          text: 'Settings'
        },
        {
          icon: 'mdi-help',
          text: 'Help'
        }
      ]
    }
  },
  computed: {
    ...mapState({
    app: state => state.app,
    user: state => state.user,
    isUserLoggedIn: state => state.isUserLoggedIn
    })
  }
}
</script>

<style scoped>
  .v-list__group--active {
    background-color: #19212b;
  }
  .logo-img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
</style>
