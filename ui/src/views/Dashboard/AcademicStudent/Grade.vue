<template>
    <div>
        <student-table :desserts="desserts" />
    </div>
</template>
<script>
import AcademicStudentService from "@/api/AcademicStudentService"
export default {
    data: () => ({
        desserts: []
        // yearId: '',
        // gradeId: ''
    }),
    created() {
        this.getStudent ()
    },
    methods: {
        async getStudent () {
            // this.yearId = this.$route.query.yearId,
            // this.gradeId = this.$route.query.gradeId
            var students = `?yearId=${this.$route.query.yearId}&gradeId=${this.$route.query.gradeId}`
            this. desserts = (await AcademicStudentService.byGrade(students)).data.students
        }
    }
}
</script>