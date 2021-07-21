import Vue from 'vue'
import ElementUI from 'element-ui'
import './assets/styles/reset.css'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'


Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueRouter)

new Vue({
  router,
  render: h => h(App),
  comments: {App},
  template: '<App>'
}).$mount('#app')
