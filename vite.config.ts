import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteCompression from 'vite-plugin-compression'

import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // gzip压缩 生产环境生成 .gz 文件
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz',
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  // 打包路径
  base: './',
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/css/common.scss";'
      }
    }
  },
  server: {
    port: 7799,
    // 自动打开浏览器
    open: true,
    // 允许跨域
    cors: true,
    proxy: {
      '/api': {
        target: 'xxx',
        changeOrigin: true,
        secure: false,
        rewrite: path => path.replace('/api/', '/')
      }
    }
  },
  build: {
    // 生产环境去除 console 和 debugger
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  }
})
