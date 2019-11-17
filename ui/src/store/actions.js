// https://vuex.vuejs.org/en/actions.html

export default {
  setToken ({commit}, token) {
    commit('setToken', token)
  },
  setUser ({commit}, user) {
    commit('setUser', user)
  },
  setSchool ({commit}, user) {
    commit('setSchool', user)
  }
}
