import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    user_type: localStorage.getItem('user_type') || null,
  }),
  actions: {
    setUserType(type) {
      this.user_type = type
      localStorage.setItem('user_type', type)
    }
  }
})
