import Api from '@/api'

export default {
  index (years) {
    return Api().get('academic-years', years)
  },
  show (id) {
    return Api().get(`academic-years/${id}`)
  },
  post (year) {
    return Api().post('academic-years', year)
  },
  put (year) {
    return Api().put(`academic-years/${year._id}`, year)
  },
  remove (year) {
    return Api().delete(`academic-years/${year._id}`)
  }
}
