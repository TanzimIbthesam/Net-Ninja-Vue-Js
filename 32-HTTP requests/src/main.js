import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'
// import footballers from './Tanzim.vue'

// Vue.component('footballers',footballers)
Vue.config.productionTip = false
Vue.use(VueResource);
export const bus=new Vue();
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
