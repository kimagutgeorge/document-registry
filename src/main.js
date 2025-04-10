import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import { createApp } from 'vue'
import App from './App.vue'
import "../src/assets/style/custom_css.css"
import router from './router'

createApp(App).use(router).mount('#app')

// // Your existing Vue imports and setup
// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'

// const app = createApp(App)
// app.use(router)
// app.mount('#app')
