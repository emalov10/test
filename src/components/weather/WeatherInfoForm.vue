<template>
  <form @submit.prevent="submitForm"
        class="d-flex flex-column justify-content-center"
  >
    <label for="city-name">
      City Name
    </label>
    <b-form-input v-model="city_"
                  @focus="onFocus"
                  @blur="onBlur"
                  @keypress.enter="onKeypressEnter"
                  :placeholder="'Enter your city name'"
                  type="text"
                  id="city-name"
                  class="input-group"
    />
    <b-button variant="primary"
              type="submit"
              class="btn btn-primary mt-2"
    >
      Send
    </b-button>
  </form>
</template>

<script>
  import {mapActions, mapGetters, mapMutations} from 'vuex';

  export default {
    name: 'WeatherInfo',
    data: () => ({
      focus: false,
    }),
    computed: {
      ...mapGetters('Weather', [
        'getCityName',
        'getQueryRef'
      ]),
      city_: {
        get() {
          return this.getCityName;
        },
        set(v) {
          this.setCityName(v);
        },
      },
    },
    methods: {
      ...mapMutations('Weather', {
        setCityName: 'SET_CITY_NAME',
      }),
      ...mapActions('Weather', {
        getWeatherInfo: 'getWeatherInfo',
      }),
      onFocus() {
        this.focus = true;
      },
      onBlur() {
        this.focus = false;
      },
      onKeypressEnter($event) {
        $event.target.blur();
      },
      submitForm() {
        this.getWeatherInfo()
          .then(() => {
            this.$router.replace({query: {city: this.city_}});
          })
          .catch(() => {
            this.$toasted.error('City not found').goAway(3500);
          });
      },
    },
  };
</script>

<style scoped>

</style>
