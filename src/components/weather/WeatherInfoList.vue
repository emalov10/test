<template>
  <section v-if="weatherInfoData.length > 0 "
           class="weather-list"
  >
    <weather-info-list-item v-for="(item, i) in weatherInfoData"
                            :key="i"
                            :id="i"
                            :date="item.date"
                            :weather="item.weather"
                            class="w-100 col-6"
                            :class="{'bg-dark' : item.i === i}"
    />
  </section>
</template>

<script>
  import WeatherInfoListItem from './WeatherInfoListItem';

  import {mapGetters} from 'vuex';

  export default {
    name: 'WeatherInfoList',
    components: {WeatherInfoListItem},
    computed: {
      ...mapGetters('Weather', [
        'weatherInfoData',
      ]),
    },
  };
</script>

<style scoped>
  .weather-list {
    display: grid;
    grid-template-rows: auto 1fr auto;
  }
</style>
