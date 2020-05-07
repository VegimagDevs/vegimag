import { Module, VuexModule, Mutation } from 'vuex-module-decorators'

@Module({
  namespaced: true
})
export default class extends VuexModule {
  isAuthenticated = false

  @Mutation
  setIsAuthenticated (isAuthenticated: boolean) {
    this.isAuthenticated = isAuthenticated
  }
}
