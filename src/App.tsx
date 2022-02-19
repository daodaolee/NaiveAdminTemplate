import { RouterView } from 'vue-router'
import GlobalProvider from '@/components/GlobalProvider'
import '@/styles/index.scss'

const App = () => {
  return (
    <GlobalProvider>
      <RouterView />
    </GlobalProvider>
  )
}

export default App
