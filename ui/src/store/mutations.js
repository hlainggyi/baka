// https://vuex.vuejs.org/en/mutations.html

export default {
  setToken (state, token) {
    state.token = token
    state.isUserLoggedIn = !!(token)
  },
  setUser (state, user) {
    state.user = user
  },
  setSchool (state, school) {
    state.school = school
  }
}
