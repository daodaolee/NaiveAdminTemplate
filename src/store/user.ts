import { defineStore } from 'pinia'
import http from '@/service/http'
export const useUserStore = defineStore({
  id: 'user',
  state: () => {
    return {
      name: "daodaolee"
    }
  },
  actions: {
    updateName(name: string) {
      this.name = name
    },
    async login() {
      const result = await http.get('/login')
      return result
    }
  },
  getters: {
    name: state => {
      return state.name
    }
  },
  // 开启数据缓存
  persist: {
    enabled: true
  }
})