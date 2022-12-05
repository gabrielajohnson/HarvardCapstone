import { createApp } from 'vue'
import router from '@/common/router.js';
import {Tabs, Tab} from 'vue3-tabs-component';
import App from './App.vue'

const capstoneApp = createApp(App)
capstoneApp.use(router)

capstoneApp
	.component('mediaTabs', Tabs)
    .component('mediaTab', Tab)
	.mount('#app')

