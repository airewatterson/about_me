import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './modules/router'
import pinia from './modules/pinia'

const app = createApp(App)

app.use(router)
app.use(pinia)


app.mount('#app')
