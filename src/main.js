import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import vi from 'element-plus/es/locale/lang/vi'
import AssetList from './components/views/assets/AssetList.vue'

import { createRouter, createWebHistory } from 'vue-router'


// B2: Định nghĩa router

const routers= [
    {path: "", component: AssetList},
    { path: "/tong-quan", component: AssetList }, 
    { path: "/tai-san", component: AssetList },
    { path: "/tai-san-ht-db", component: AssetList },
    { path: "/cong-cu-dung-cu", component: AssetList },
    { path: "/danh-muc", component: AssetList },
    { path: "/tra-cuu", component: AssetList },
    { path: "/bao-cao", component: AssetList },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routers
})

// Routes

// Store

const app = createApp(App);
app.use(ElementPlus, {
    locale: vi,
})
app.use(router);
app.mount('#app')
