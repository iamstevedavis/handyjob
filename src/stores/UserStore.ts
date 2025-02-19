import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    isLoggedIn: false,
    token: null as string | null
  }),
  actions: {
    login(token: string | null) {
      this.isLoggedIn = true
      this.token = token
    },
    logout() {
      this.isLoggedIn = false
      this.token = null
    }
  }
})
