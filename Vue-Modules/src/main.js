// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
// import ElementUI from 'element-ui';
// import store from './store/';
import Api from './api/index.js';
import md5 from 'js-md5';
import resetRem from '@/common/scripts/resetRem.js';
// import i18n from './i18n/i18n';
import 'font-awesome/css/font-awesome.css';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;

Vue.prototype.$api = Api;
Vue.prototype.$md5 = md5;

Vue.use(resetRem);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
