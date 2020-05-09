import { firestoreAction } from 'vuexfire'
import { firestore } from '@/plugins/firebase'

const state = () => ({
  baskets: []
})

const actions = {
  bind: firestoreAction(({ bindFirestoreRef }) => {
    return bindFirestoreRef('baskets', firestore.collection('baskets'))
  })
}

const getters = {
  basket (state) {
    return state.baskets[0]
  }
}

export default {
  namespaced: true,
  state,
  actions,
  getters
}
