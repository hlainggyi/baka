<template>
  <v-card>
    <v-card-title>
      {{ title_name }}
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
        v-model="selected"
        :headers="headers"
        :items="desserts"
        :search="search"
        :pagination.sync="pagination"
        select-all
        item-key="name"
        class="elevation-1"
    >
      <template v-slot:headers="props">
        <tr>
            <th>
            <v-checkbox
                :input-value="props.all"
                :indeterminate="props.indeterminate"
                primary
                hide-details
                @click.stop="toggleAll"
            ></v-checkbox>
            </th>
            <th
            v-for="header in props.headers"
            :key="header.text"
            :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
            @click="changeSort(header.value)"
            >
            <v-icon small>mdi-arrow-up</v-icon>
            {{ header.text }}
            </th>
        </tr>
        </template>
        <template v-slot:items="props">
        <tr :active="props.selected" @click="props.selected = !props.selected">
        <!-- <tr> -->
            <td>
              <v-checkbox
                  :input-value="props.selected"
                  primary
                  hide-details
              ></v-checkbox>
            </td>
            <td class="text-xs-left">{{ props.item.name }}</td>
            <td class="text-xs-left">{{ props.item.role.name }}</td>
            <!-- <td class="text-xs-left">{{ props.item.school_id }}</td> -->
            <td class="text-xs-left">{{ props.item.email }}</td>
            <td class="text-xs-center">"{{ "User Image" }}"</td>
        </tr>
      </template>
      <template v-slot:no-results>
        <v-alert :value="true" color="error" icon="mdi-warning" outline>
          Your search for "{{ search }}" found no results.
        </v-alert>
      </template>
    </v-data-table>
    <v-fab-transition>
      <v-btn
        @click="$router.push({name: 'register'})"
        dark
        fab
        fixed
        bottom
        right
        color="primary"
        small
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-fab-transition>
  </v-card>
</template>
<script>
import {mapState} from 'vuex' 
import AuthenticationService from '@/api/AuthenticationService'
  export default {
    data: () => ({
      title_name: "User List",
      search: '',
      desserts: [],
      pagination: {
        sortBy: 'role'
      },
      selected: [],
      headers: [        
        { text: 'Name', align: 'left', value: 'name' },
        { text: 'Role ID', align: 'left', value: 'role.name' },
        // { text: 'School ID', align: 'left', value: 'school_id' },
        { text: 'Email', align: 'left', value: 'email' },
        { text: 'Image', value: 'image' }
      ]
    }),
    created () {
        this.getUser ()
    },
    computed: {
      ...mapState([
        'user'
      ])
    },
    methods: {
      async getUser () {
        this.desserts = (await AuthenticationService.index()).data.users
      },
      toggleAll () {
        if (this.selected.length) this.selected = []
        else this.selected = this.desserts.slice()
      },
      changeSort (column) {
        if (this.pagination.sortBy === column) {
          this.pagination.descending = !this.pagination.descending
        } else {
          this.pagination.sortBy = column
          this.pagination.descending = false
        }
      }
    }
  }
</script>