<script setup>
import { storeToRefs } from "pinia";
import { useStore } from "../store/store";

const store = useStore();
const { weatherData } = storeToRefs(store);
console.log(weatherData.value);

function kelvinToCelsius(kelvin) {
  return (kelvin - 273.15).toFixed(1);
}
</script>
<template>
  <div class="weather-info">
    <div class="icon">
      <img :src="`http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`" :alt="weatherData.icon" />
    </div>
    <div class="temp">{{ `${kelvinToCelsius(weatherData.temp)}&deg;` }}</div>
    <div class="text">{{ weatherData.text }}</div>
    <div class="location">{{ weatherData.city }}, {{ weatherData.location }}</div>
  </div>
</template>
<style lang="scss" scoped>
.weather-info {
  padding: 20px;
  & > div {
    margin-bottom: 20px;
    padding: 20px;
    border: 1px solid #ccc;
  }
  .icon img {
    width: 140px;
  }
  .temp {
    font-size: 4rem;
  }
  .text {
    font-size: 2rem;
  }
}
</style>
