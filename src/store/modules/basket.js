import { firestoreAction } from 'vuexfire'
import { firestore } from '@/plugins/firebase'

const state = () => ({
  basket: []
})

const actions = {
  bind: firestoreAction(({ bindFirestoreRef }) => {
    return bindFirestoreRef('basket', firestore.collection('ingredients'))
  })
}

export default {
  namespaced: true,
  state,
  actions
}
