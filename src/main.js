import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/iconfont/iconfont.css'
import './rem'

import router from './router/router.js'
const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.mount('#app')





