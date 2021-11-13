import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import {routes} from './routes/routes.js';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: routes,
  base: '/portfolio',
  mode: 'history'
})

export const eventBus = new Vue();

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
