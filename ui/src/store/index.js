/**
 * Vuex
 *
 * @library
 *
 * https://vuex.vuejs.org/en/
 */

// Lib imports
import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'


// Store functionality
import state from './state'
import mutations from './mutations'
import actions from './actions'

import modules from './modules'

Vue.use(Vuex)

// Create a new store
const store = new Vuex.Store({
  strict: true,
  plugins: [
    createPersistedState()
  ],
  state,
  mutations,
  actions,
  modules
})

export default store