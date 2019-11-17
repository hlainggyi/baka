import Api from '@/api'

export default {
  index (schools) {
    return Api().get('schools', schools)
  },
  show (id) {
    return Api().get(`schools/${id}`)
  },
  post (school) {
    return Api().post('schools', school)
  },
  put (school) {
    return Api().put(`schools/${school._id}`, school)
  },
  remove (school) {
    return Api().delete(`schools/${school._id}`)
  }
}
