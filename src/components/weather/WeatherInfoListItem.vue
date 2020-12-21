<template>
  <div class="card bg-light px-5 p-2 w-100">
    <span>
      {{ date }}
    </span> --
    {{ weather }}
  </div>
</template>

<script>
  export default {
    name: 'WeatherInfoListItem',
    props: {
      id: {
        type: Number,
        required: true,
      },
      date: {
        type: String,
        required: true,
      },
      weather: {
        type: String,
        required: true,
      },
    },
  };
</script>

<style scoped>

</style>
