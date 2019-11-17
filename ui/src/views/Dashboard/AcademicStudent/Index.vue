<template>
    <v-layout row wrap>
      <v-flex xs12 sm4 d-flex offset-sm8>
        <v-select
            :items="items"
            item-text="year"
            item-value="_id"
            label="Academic Year"
            v-model="selectYear"
          ></v-select>
      </v-flex>
      <br>
      <v-flex
        v-for="(card, index) in cards"
        :key="card.title"
        xs12 sm6 md4
        class="pa-2"
      >
        <v-card>
          <v-card-title style="font-weight: bold"> {{ grades.find(x => x._id === index).name }}
            <v-spacer></v-spacer>
            <v-btn class="elevation-0" fab light small @click="toGrade(selectYear,index)">
              <v-icon light>mdi-chevron-right</v-icon>
            </v-btn>
          </v-card-title>
          <v-card-text>
            <table class="v-datatable v-table theme--light">
              <tbody>
                <tr v-for="student in card" :key="student.gender">
                  <td>{{ student.gender }}</td>
                  <td class="text-xs-right">{{ student.count }}</td>
                </tr>
                <!-- <tr>
                  <td></td>
                  <td class="text-xs-right"></td>
                </tr> -->
                <!-- <tr>
                  <td>Total</td>
                  <td>{{ card.total }}</td>
                </tr> -->
              </tbody>
              <tfoot>
                <tr>
                  <td style="font-weight: bold">Total</td>
                  <td style="font-weight: bold" class="text-xs-right"> </td>
                </tr>
              </tfoot>
            </table>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
</template>
<script>
import AcademicYearService from "@/api/AcademicYearService"
import AcademicStudentService from "@/api/AcademicStudentService"
import GradeService from "@/api/GradeService"
  export default {
    data: () => ({
      items: [],
      selectYear: '',
      year: '',
      students: [],
      grades: [],
      cards: [
        // { title: 'Grade 1', male: 30, female: 40, total: 70},
        // { title: 'Grade 2', male: 35, female: 55, total: 90},
        // { title: 'Grade 3', male: 25, female: 45, total: 70},
        // { title: 'Grade 4', male: 35, female: 55, total: 90},
        // { title: 'Grade 5', male: 25, female: 45, total: 70},
        // { title: 'Grade 6', male: 35, female: 55, total: 90},
        // { title: 'Grade 7', male: 25, female: 45, total: 70}
      ]
    }),
    watch: {
      // whenever question changes, this function will run
      selectYear: function (selectYear, year) {
        if (selectYear != year || selectYear != '') {
          this.getStudent()
        }
      }
    },
    created () {
      this.getYear ()
      this.getGrade ()
    },
    methods: {
      async getYear () {
        this.items =  (await AcademicYearService.index()).data.years
        this.year =  this.items[2]._id
        this.selectYear = this.items[2]._id
      },
      async getStudent () {
        var students = `?yearId=${this.selectYear}`
        this.students = ( await AcademicStudentService.index(students)).data.students
        this.cards = ( await AcademicStudentService.index(students)).data.students
        this.year = this.selectYear
      },
      async getGrade () {
        this.grades = (await GradeService.index()).data.grades
      },
      async toGrade (selectYear, index) {
        await this.$router.push({
          name: 'grade-students',
          query: {
            yearId: selectYear,
            gradeId: index
          }
        })
      }
    }
  }
</script>