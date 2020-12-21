import Vue from 'vue';
import Vuex from 'vuex';
import Weather from './modules/weather';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    Weather,
  },
});
