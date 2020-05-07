import Vue from 'vue'
import Vuex from 'vuex'
import { vuexfireMutations, firestoreAction } from 'vuexfire'
import { firestore } from '@/plugins/firebase'
import auth from './modules/auth'
import alert from './modules/alert'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
    isAuthenticated: false,
    basket: []
  },
  mutations: {
    setIsAuthenticated (state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated
    },
    ...vuexfireMutations
  },
  actions: {
    bindBasket: firestoreAction(({ bindFirestoreRef }) => {
      return bindFirestoreRef('basket', firestore.collection('ingredients'))
    })
  },
  modules: {
    auth,
    alert
  },
  strict: debug
})
