import { createApp } from 'vue'
import router from './router/index'
import store from './store/index'
import App from './App.vue'
import { setupNaive } from '@/plugins'

async function setupMain() {

  const app = createApp(App)
  // 注册全局常用的 naive-ui 组件
  setupNaive(app)

  // 挂载路由
  app.use(router)

  // 挂载pinia
  app.use(store)

  // 挂载 app
  app.mount('#app')
}


setupMain()