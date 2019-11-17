import Api from '@/api'

export default {
  // Use
  index (students) {
    return Api().get(`academic-students${students}`, students)
  },

  byGrade(students) {
    return Api().get(`grade-students${students}`, students)
  },

  // Not Use
  show (id) {
    return Api().get(`academic-students/${id}`)
  },
  post (student) {
    return Api().post('academic-students', student)
  },
  put (student) {
    return Api().put(`academic-students/${student._id}`, student)
  },
  remove (student) {
    return Api().delete(`academic-students/${student._id}`)
  }
}
