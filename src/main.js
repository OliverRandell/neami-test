import Vue from 'vue'
import App from './App.vue'

import { router } from './router'

Vue.config.productionTip = false

import { configureFakeBackend } from './backend/backend';
configureFakeBackend();

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
