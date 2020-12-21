import Vue from 'vue';
import Router from 'vue-router';
import WeatherInfo from '.././components/weather/WeatherInfo';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'WeatherInfo',
      component: WeatherInfo
    }
  ]
});

export default router;
