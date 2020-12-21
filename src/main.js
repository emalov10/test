import Vue from 'vue';
import App from './App';
import router from './router';
import {store} from './store';

import Toasted from 'vue-toasted'

Vue.use(Toasted, Option)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import {FormPlugin} from 'bootstrap-vue';
import {InputGroupPlugin} from 'bootstrap-vue';
import {FormInputPlugin} from 'bootstrap-vue';
import {ButtonPlugin} from 'bootstrap-vue';
import {FormGroupPlugin} from 'bootstrap-vue';

Vue.use(FormPlugin);
Vue.use(InputGroupPlugin);
Vue.use(FormInputPlugin);
Vue.use(ButtonPlugin);
Vue.use(FormGroupPlugin);

Vue.config.productionTip = false;

/* eslint-disable no-new */
let vue = new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
});

export default vue;
