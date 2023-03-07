import '@babel/polyfill';
// import 'mutationobserver-shim';
import Vue from 'vue';

import './plugins/bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
