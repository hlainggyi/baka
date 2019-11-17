import Api from '@/api'

export default {
  index (students) {
    return Api().get('students', students)
  },
  show (id) {
    return Api().get(`students/${id}`)
  },
  post (student) {
    return Api().post('students', student)
  },
  put (student) {
    return Api().put(`students/${student._id}`, student)
  },
  remove (student) {
    return Api().delete(`students/${student._id}`)
  }
}
