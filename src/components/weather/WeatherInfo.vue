<template>
  <div class="container">
    <section class="row">
      <weather-info-form class="col-6 card p-4"/>
    </section>
    <preloader v-if="isLoading === true"
               class="text-center"
    />
    <div v-else>
      <weather-info-list v-if="weatherInfoData.length > 1"
                         class="mt-3 row"
      />
      <h3 class="row justify-content-center mt-5">
        N/D
      </h3>
    </div>
  </div>
</template>

<script>
  import WeatherInfoForm from '../weather/WeatherInfoForm';
  import WeatherInfoList from './WeatherInfoList';
  import Preloader from '../elements/Preloader';

  import {mapActions, mapGetters, mapMutations} from 'vuex';

  export default {
    name: 'WeatherInfo',
    components: {
      WeatherInfoForm,
      WeatherInfoList,
      Preloader,
    },
    computed: {
      ...mapGetters('Weather', [
        'weatherInfoData',
        'isLoading',
      ]),
    },
    mounted() {
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
