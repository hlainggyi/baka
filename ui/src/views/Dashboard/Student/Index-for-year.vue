<template>
  <v-layout row wrap>
    <v-flex
      v-for="card in cards"
      :key="card.title"
      xs12 sm6 md4
      class="pa-2"
    >
      <v-card>
        <v-card-title style="font-weight: bold">{{card.title}}<v-spacer></v-spacer>
          <v-btn class="elevation-0" fab light small>
            <v-icon light>mdi-chevron-right</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <table class="v-datatable v-table theme--light">
            <tbody>
              <tr>
                <td >Male</td>
                <td class="text-xs-right">{{ card.male }}</td>
              </tr>
              <tr>
                <td>Female</td>
                <td class="text-xs-right">{{ card.female }}</td>
              </tr>
              <!-- <tr>
                <td>Total</td>
                <td>{{ card.total }}</td>
              </tr> -->
            </tbody>
            <tfoot>
              <tr>
                <td style="font-weight: bold">Total</td>
                <td style="font-weight: bold" class="text-xs-right">{{card.total}}</td>
              </tr>
            </tfoot>
          </table>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import StudentService from "@/api/StudentService"
  export default {
    data: () => ({
      cards: [
        // { title: 'Grade 1', male: 30, female: 40, total: 70},
        // { title: 'Grade 2', male: 35, female: 55, total: 90},
        // { title: 'Grade 3', male: 25, female: 45, total: 70},
        // { title: 'Grade 2', male: 35, female: 55, total: 90},
        // { title: 'Grade 3', male: 25, female: 45, total: 70},
        // { title: 'Grade 2', male: 35, female: 55, total: 90},
        // { title: 'Grade 3', male: 25, female: 45, total: 70}
      ]
    }),
    created () {
      this.getStudent ()
    },
    methods: {
      async getStudent () {
        this.cards =  (await StudentService.index()).data.students
      }
    },
  }
</script>