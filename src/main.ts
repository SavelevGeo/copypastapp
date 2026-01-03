import { createApp } from 'vue'
import App from './App.vue'

// Import Bootstrap and BootstrapVueNext CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

const app = createApp(App)
app.mount('#app')
