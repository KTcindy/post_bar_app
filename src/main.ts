import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@vant/touch-emulator';
import { ConfigProvider } from 'vant';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ConfigProvider)
app.mount('#app')
