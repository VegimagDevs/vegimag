const state = () => ({
  isAuthenticated: false
})

const mutations = {
  setIsAuthenticated (state, isAuthenticated) {
    state.isAuthenticated = isAuthenticated
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
