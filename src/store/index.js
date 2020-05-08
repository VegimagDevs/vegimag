import Vue from 'vue'
import Vuex from 'vuex'
import { vuexfireMutations } from 'vuexfire'
import auth from './modules/auth'
import alert from './modules/alert'
import basket from './modules/basket'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  mutations: {
    ...vuexfireMutations
  },
  modules: {
    auth,
    alert,
    basket
  },
  strict: debug
})
