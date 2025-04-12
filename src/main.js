import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import { createApp } from 'vue'
import App from './App.vue'
import "../src/assets/style/custom_css.css"
import router from './router'
import store from './store'

createApp(App).use(router).use(store).mount('#app')
