import axios from 'axios'
import store from '@/store'


export default () => {
  return axios.create({
    baseURL: `http://localhost:3000/v1/`,
    headers: {
      Authorization: `Bearer ${store.state.token}`
      // role: `${store.state.role}`
    }
  })
}
