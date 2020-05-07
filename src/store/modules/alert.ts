import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

enum AlertType {
  Success = 'success',
  Error = 'error'
}

interface Alert {
  type: AlertType;
  title: string;
  message: string;
}

@Module({
  namespaced: true
})
export default class extends VuexModule {
  currentAlert: Alert|null = null
  timeoutId: number|null = null

  @Mutation
  setCurrentAlert (alert: Alert|null) {
    this.currentAlert = alert
  }

  @Mutation
  setTimeoutId (timeoutId: number|null) {
    this.timeoutId = timeoutId
  }

  @Action
  async close () {
    if (this.timeoutId !== null) {
      clearTimeout(this.timeoutId)
      this.context.commit('setTimeoutId', null)
    }

    this.context.commit('setCurrentAlert', null)
  }

  @Action
  async create (alert: Alert) {
    if (this.currentAlert) {
      await this.context.dispatch('close')
    }

    this.context.commit('setCurrentAlert', alert)

    this.context.commit('setTimeoutId', setTimeout(() => {
      this.context.commit('setCurrentAlert', null)
      this.context.commit('setTimeoutId', null)
    }, 5000))
  }
}
