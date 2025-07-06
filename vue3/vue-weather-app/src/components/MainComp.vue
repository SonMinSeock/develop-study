<script setup>
import Searchbar from "./Searchbar.vue";
import WeatherInfo from "./WeatherInfo.vue";

// props 받아오기
const props = defineProps({
  weatherData: Object,
});
</script>
<template>
  <div class="container">
    <Searchbar />
    <WeatherInfo :weatherData="props.weatherData" />
  </div>
</template>
<style lang="scss"></style>
