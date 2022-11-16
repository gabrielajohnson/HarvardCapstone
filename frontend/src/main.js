/*import { createApp } from 'vue'
import router from '@/common/router.js';
import App from './App.vue'


createApp(App).mount('#app')*/


import { createApp } from 'vue'
import router from '@/common/router.js';
import App from './App.vue'

const capstoneApp = createApp(App)
capstoneApp.use(router)

capstoneApp.mount('#app')

