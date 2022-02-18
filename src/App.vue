<template>
  <NConfigProvider
    :locale="zhCN"
    :theme="null"
  >
    <AppProvider>
      <RouterView />
    </AppProvider>
  </NConfigProvider>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import { zhCN, dateZhCN, darkTheme } from 'naive-ui'
import { AppProvider } from "@/components/Application"

export default defineComponent({
  components:{AppProvider},
  setup() {
    return {
      darkTheme,
      zhCN,
      // dateZhCN
    }
  }
})
</script>

<style lang="scss">
</style>
