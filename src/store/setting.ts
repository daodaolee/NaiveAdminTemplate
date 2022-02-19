import { globalTheme, ISettings } from '@/settings'

export const useSettingStore = defineStore({
  id: 'settings',
  state: () => ({
    globalTheme
  }),
  actions: {
    changeSetting(settingKey: keyof ISettings, data?: string) {
      // if (settingKey) {
      //   this[settingKey] = data
      // }
    }
  },
  // 开启数据缓存
  // @ts-ignore
  persist: {
    enabled: true
  }
})