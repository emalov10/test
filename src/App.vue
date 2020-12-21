<template>
  <div id="app">
    <weather-info/>
  </div>
</template>

<script>
  import WeatherInfo from './components/weather/WeatherInfo';
  import Preloader from './components/elements/Preloader';

  import {mapGetters} from 'vuex';

  export default {
    name: 'App',
    components: {
      WeatherInfo,
      Preloader,
    },
    computed: {
      ...mapGetters('Weather', {
        isLoading: 'isLoading',
      }),
    },
  };
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
