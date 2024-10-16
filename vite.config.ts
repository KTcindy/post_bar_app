import { fileURLToPath, URL } from 'node:url'
import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
//按需引入vant
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from '@vant/auto-import-resolver';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
  css: {
    // 预处理器配置项
    preprocessorOptions: {
      less: {
        // math: "always",
      },
    },
  },
  server:{
    // host:'192.168.0.104'
    proxy: {
      '/api': {
        target: 'http://127.0.0:3001', // 服务器地址
        changeOrigin: true, //是否跨域
        rewrite: (path) => path.replace(/^\/api/, ''), //重写路径，将 /api 替换为空
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@/utils':path.resolve(__dirname, './src/utils'),
      '@/assets':path.resolve(__dirname, './src/assets'),
    }
  }
})
