import Api from '@/api'

export default {
  index (grades) {
    return Api().get('grades', grades)
  },
  show (id) {
    return Api().get(`grades/${id}`)
  },
  post (grade) {
    return Api().post('grades', grade)
  },
  put (grade) {
    return Api().put(`grades/${grade._id}`, grade)
  },
  remove (grade) {
    return Api().delete(`grades/${grade._id}`)
  }
}
