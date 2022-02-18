<template>
  <n-config-provider
    :locale="zhCN"
    :theme="darkTheme"
  >
    <!-- 容器 -->
    <router-view />
  </n-config-provider>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import { zhCN, dateZhCN } from 'naive-ui'
import { createTheme, inputDark, datePickerDark } from 'naive-ui'

export default defineComponent({
  setup() {
    return {
      darkTheme: createTheme([inputDark, datePickerDark]),
      zhCN,
      // dateZhCN
    }
  }
})
</script>

<style>
</style>
