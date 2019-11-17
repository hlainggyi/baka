import Api from '@/api'

export default {
  index (posts) {
    return Api().get('posts', posts)
  },
  show (id) {
    return Api().get(`posts/${id}`)
  },
  post (post) {
    return Api().post('posts', post)
  },
  put (post) {
    return Api().put(`posts/${post._id}`, post)
  },
  remove (post) {
    return Api().delete(`posts/${post._id}`)
  }
}
