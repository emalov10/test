<template>
  <div class="container">
    <section class="row">
      <weather-info-form class="col-6 card p-4"/>
    </section>
    <weather-info-list v-if="weatherInfoData.length > 1"
                       class="mt-3 row"
    />
    <h3 v-else
        class="row justify-content-center mt-5"
    >
      N/D
    </h3>
  </div>
</template>

<script>
  import WeatherInfoForm from '../weather/WeatherInfoForm';
  import WeatherInfoList from './WeatherInfoList';

  import {mapActions, mapGetters, mapMutations} from 'vuex';

  export default {
    name: 'WeatherInfo',
    components: {
      WeatherInfoForm,
      WeatherInfoList,
    },
    computed: {
      ...mapGetters('Weather', [
        'weatherInfoData',
      ]),
    },
    created() {
      if (this.$route.query.city !== undefined) {
        this.setCityName(this.$route.query.city);
        this.getWeatherInfo();
      }
    },
    methods: {
      ...mapMutations('Weather', {
        setCityName: 'SET_CITY_NAME',
      }),
      ...mapActions('Weather', {
        getWeatherInfo: 'getWeatherInfo',
      }),
    }
  };
</script>

<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
