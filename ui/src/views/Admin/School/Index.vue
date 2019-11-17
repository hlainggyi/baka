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
        <!-- <tr :active="props.selected" @click="props.selected = !props.selected"> -->
        <tr @click="$router.push({
                      name: 'school-show',
                      params: { _id: props.item._id }
                    })">
            <td>
              <v-checkbox
                  :input-value="props.selected"
                  primary
                  hide-details
              ></v-checkbox>
            </td>
            <td class="text-xs-left">{{ props.item.name }}</td>
            <td class="text-xs-left">{{ props.item.slogram }}</td>
            <td class="text-xs-left">{{ props.item._id }}</td>
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
        @click="$router.push({name: 'schools-create'})"
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
import SchoolService from '@/api/SchoolService'
  export default {
    data: () => ({
      title_name: "School List",
      search: '',
      desserts: [],
      pagination: {
        sortBy: 'name'
      },
      selected: [],
      headers: [        
        { text: 'Name', align: 'left', value: 'name' },
        { text: 'Slogram', align: 'left', value: 'slogram' },
        { text: 'ID', align: 'left', value: '_id' },
        { text: 'Image', value: 'image' }
      ]
    }),
    created () {
        this.getSchool ()
    },
    methods: {
      async getSchool () {
        this.desserts = (await SchoolService.index()).data.schools
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