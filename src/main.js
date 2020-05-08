import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { auth } from './plugins/firebase'
import './plugins/meta'
import './assets/tailwind.css'

Vue.config.productionTip = false

let mounted = false

auth.onAuthStateChanged(user => {
  store.commit('auth/setIsAuthenticated', user !== null)
  store.dispatch('basket/bind')

  if (!mounted) {
    mounted = true

    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
