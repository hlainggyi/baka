import Api from '@/api'

export default {
  index (userRoles) {
    return Api().get('roles', userRoles)
  },
  show (id) {
    return Api().get(`roles/${id}`)
  },
  post (userRole) {
    return Api().userRole('roles', userRole)
  },
  put (userRole) {
    return Api().put(`roles/${userRole._id}`, userRole)
  },
  remove (userRole) {
    return Api().delete(`roles/${userRole._id}`)
  }
}
