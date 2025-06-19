import { createApp } from 'vue'
import { createPinia } from 'pinia';
import App from './App.vue'

import {createMemoryHistory, createRouter } from 'vue-router'

import api from './components/api.vue'
import form from './components/form.vue'
import home from './components/home.vue'

const routes = [
  { path: '/', component: home },
  { path: '/form', component: form },
  { path: '/api', component: api },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);
app.mount('#app');