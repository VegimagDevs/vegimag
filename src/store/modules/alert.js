const state = () => ({
  currentAlert: null,
  timeoutId: null
})

const mutations = {
  setCurrentAlert (state, alert) {
    state.currentAlert = alert
  },
  setTimeoutId (state, timeoutId) {
    state.timeoutId = timeoutId
  }
}

const actions = {
  async close ({ commit, state }) {
    if (state.timeoutId !== null) {
      clearTimeout(state.timeoutId)
      commit('setTimeoutId', null)
    }

    commit('setCurrentAlert', null)
  },
  async create ({ dispatch, commit, state }, alert) {
    if (state.currentAlert) {
      await dispatch('close')
    }

    commit('setCurrentAlert', alert)

    commit('setTimeoutId', setTimeout(() => {
      commit('setCurrentAlert', null)
      commit('setTimeoutId', null)
    }, 5000))
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
