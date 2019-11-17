import Api from '@/api'

export default {
  index (teachers) {
    return Api().get('teachers', teachers)
  },
  show (id) {
    return Api().get(`teachers/${id}`)
  },
  post (teacher) {
    return Api().post('teachers', teacher)
  },
  put (teacher) {
    return Api().put(`teachers/${teacher._id}`, teacher)
  },
  remove (teacher) {
    return Api().delete(`teachers/${teacher._id}`)
  }
}
