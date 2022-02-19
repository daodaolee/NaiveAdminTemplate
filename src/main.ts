import { createApp } from 'vue'
import App from './App'

import router from './router/index'
import { createPinia } from 'pinia'
// 数据持久化
import piniaPluginPersist from 'pinia-plugin-persist'

const store = createPinia()
store.use(piniaPluginPersist)

// import { setupNaive } from '@/plugins'

const app = createApp(App)
// 注册全局常用的 naive-ui 组件
// setupNaive(app)

// 挂载路由
app.use(router)

// 挂载pinia
app.use(store)

// 挂载 app
app.mount('#app')
