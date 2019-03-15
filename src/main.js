import Vue from 'vue'
import App from './App.vue'
import vueConfig from 'vue-config'
import router from './router'
import { configs } from './config'

Vue.config.productionTip = false

Vue.use(vueConfig, configs)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
