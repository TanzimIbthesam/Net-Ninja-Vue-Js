// import Vue from 'vue'
// import App from './App.vue'
// import router from './router'

// import VueResource from 'vue-resource'
// import VueRouter from 'vue-router'
// import Routes from './routes'
// // import footballers from './Tanzim.vue'

// // Vue.component('footballers',footballers)
// // Vue.config.productionTip = false
// Vue.use(VueResource);
// Vue.use(VueRouter);

// const router=new VueRouter({
// routes:Routes
// });


// // export const bus=new Vue();
// new Vue({
//   // router,
//   // store,
//   render: h => h(App),
//   router:router
// })
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App.vue'
import Routes from './routes'

// Use packages
Vue.use(VueResource);
Vue.use(VueRouter);

// Register routes
const router = new VueRouter({
    routes: Routes,
    mode:'history'
});

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
