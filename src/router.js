import Vue from 'vue'
import Router from 'vue-router'
import LyricGenerator from './components/generator/LyricGenerator.vue'
import LyricClassifier from './components/classifier/LyricClassifier.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LyricGenerator',
      component: LyricGenerator
    },
    {
        path: '/classifier/',
        name: 'LyricClassifier',
        component: LyricClassifier
      },
  ]
})
