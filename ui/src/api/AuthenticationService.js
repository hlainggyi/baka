import Api from '@/api'

export default {
  register (credentials) {
    return Api().post('register', credentials)
  },
  login (credentials) {
    return Api().post('login', credentials)
  },
  index (users) {
    return Api().get('users', users)
  },
  show (_id) {
    return Api().get(`users/${_id}`)
  },
  put (user) {
    return Api().put(`users/${user._id}`, user)
  }
}
 