import axios from 'axios';

const headersJsonAuth = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
  'Content-Type': 'application/json',
};

import WeatherInfo from '../../models/WeatherInfo';

const apiKey = '988b287997c9c9eb1e400d14e40b069a';

const state = {
  cityName: '',
  weatherInfo: [],
  loading: false,
  queryRef: '',
};

const getters = {
  getCityName: state => state.cityName,
  isLoading: state => state.loading,
  weatherInfoData: state => state.weatherInfo,
  getQueryRef: state => state.queryRef,
};

const actions = {
  /**
   * @param {Function} commit
   * @param {Object} state
   * @returns {Promise<*>}
   */
  getWeatherInfo({commit, state}) {
    const url = 'https://thingproxy.freeboard.io/fetch/https://api.openweathermap.org/data/2.5/forecast';

    return new Promise((resolve, reject) => {
      commit('SET_LOADING', true);
      commit('SET_WEATHER_INFO', []);

      let params = {
        q: state.cityName,
        appid: apiKey,
        lang: 'ru',
      };

      axios({
        method: 'GET',
        headers: headersJsonAuth,
        url,
        params: params
      })
        .then(resp => {
          commit('SET_WEATHER_INFO', resp.data.list);
          commit('SET_LOADING', false);

          console.log(resp.request);

          resolve();
        })
        .catch(err => {
          commit('SET_LOADING', false);
          reject(err);
        });
    });
  },
};

const mutations = {
  /**
   * @param {Object} state
   * @param {Object} value
   */
  SET_CITY_NAME: (state, value) => {
    state.cityName = value;
  },
  /**
   * @param {Object} state
   * @param {boolean} loading
   * @constructor
   */
  SET_LOADING: (state, loading) => {
    state.loading = Boolean(loading);
  },
  /**
   * @param {Object} state
   * @param {Object} values
   */
  SET_WEATHER_INFO: (state, values) => {
    state.weatherInfo = [];

    for (let value of values) {
      state.weatherInfo.push(new WeatherInfo(value));
    }
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
