import { createApp } from 'vue'
import router from './router/index'
import store from './store/index'
import App from './App.vue'

import {
  // create naive ui
  create,
  // component
  NButton
} from 'naive-ui'
const naive = create({
  components: [NButton]
})

const app = createApp(App)
app.use(router)
app.use(store)
app.use(naive)
app.mount('#app')

