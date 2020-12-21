<template>
  <form @submit.prevent="submitForm"
        class="d-flex flex-column justify-content-center"
  >
    <label for="city-name">
      City Name
    </label>
    <b-form-input v-model="city"
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
      city: '',
    }),
    computed: {
      ...mapGetters('Weather', [
        'getCityName',
        'getQueryRef'
      ]),
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
        console.log('submitForm', this.city);
        if (this.city !== '') {
          this.setCityName(this.city);
          this.getWeatherInfo()
            .then(() => {
              this.$router.replace({query: {city: this.city}});
            })
            .catch(() => {
              this.$toasted.error('City not found').goAway(3500);
            });
        }
      },
    },
  };
</script>

<style scoped>

</style>
