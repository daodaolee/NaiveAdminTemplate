import {
  NConfigProvider,
  NLoadingBarProvider,
  NMessageProvider,
  NNotificationProvider,
  NDialogProvider,
  darkTheme,
  zhCN,
  dateZhCN
} from 'naive-ui'
import GlobalInject from './inject'
import { useSettingStore } from '@/store'

const GlobalProvider = () => {
  // 这里的 $message 等方法必须抽离出去，naive的问题
  const slots = useSlots()
  const { globalTheme } = storeToRefs(useSettingStore());

  return (
    <NConfigProvider
      locale={zhCN}
      dateLocale={dateZhCN}
      theme={globalTheme.value === 'darkTheme' ? darkTheme : undefined}
    >
      <NDialogProvider>
        <NNotificationProvider>
          <NMessageProvider>
            <NLoadingBarProvider>
              <GlobalInject>{slots.default!()}</GlobalInject>
            </NLoadingBarProvider>
          </NMessageProvider>
        </NNotificationProvider>
      </NDialogProvider>
    </NConfigProvider>
  )
}
export default GlobalProvider