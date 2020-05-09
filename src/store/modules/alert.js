const errorMessages = {
  'auth/email-already-in-use': 'Un compte existe déjà avec cette adresse email, désolé.',
  'auth/invalid-email': 'Cette adresse email est invalide, désolé.',
  'auth/weak-password': 'Votre mot de passe est trop faible, désolé.',
  'auth/user-disabled': 'Ce compte a été désactivé, désolé.',
  'auth/user-not-found': 'Il n\'existe aucun compte avec cette adresse email, désolé.',
  'auth/wrong-password': 'Ce mot de passe est incorrect, désolé.'
}

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
  },
  async createFromErrorCode ({ dispatch }, errorCode) {
    const alert = {
      type: 'error',
      title: 'Une erreur est survenue !'
    }

    alert.message = errorMessages[errorCode]

    if (!alert.message) {
      alert.message = 'Une erreur inconnue est survenue, désolé.'
    }

    await dispatch('create', alert)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
