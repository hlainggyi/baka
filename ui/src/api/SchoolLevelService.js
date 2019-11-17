import Api from '@/api'

export default {
  index (schoolLevels) {
    return Api().get('school-levels', schoolLevels)
  },
  show (id) {
    return Api().get(`school-levels/${id}`)
  },
  post (schoolLevel) {
    return Api().post('school-levels', schoolLevel)
  },
  put (schoolLevel) {
    return Api().put(`school-levels/${schoolLevel._id}`, schoolLevel)
  },
  remove (schoolLevel) {
    return Api().delete(`school-levels/${schoolLevel._id}`)
  }
}
