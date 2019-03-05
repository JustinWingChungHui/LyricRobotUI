import Vue from 'vue'
import App from './App.vue'
import vueConfig from 'vue-config'

Vue.config.productionTip = false


const configs = {
  CreateLyricAPI:  'https://lyriccreator.azurewebsites.net/api/LyricCreatorFunction', //'http://localhost:7071/api/LyricCreatorFunction',
  CreateLyricAPICode: 'N87Je1kenLA0R3pihqLE466DUfYtfdu1MzzAnd8C3mJCfXLjqbTpvQ=='
}


Vue.use(vueConfig, configs)

new Vue({
  render: h => h(App),
}).$mount('#app')
