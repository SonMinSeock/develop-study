<script setup>
function kelvinToCelsius(kelvin) {
  return (kelvin - 273.15).toFixed(1);
}
const props = defineProps({
  weatherData: Object,
});
</script>
<template>
  <div class="weather-info">
    <div class="icon">
      <img :src="`http://openweathermap.org/img/wn/${props.weatherData.icon}@2x.png`" :alt="props.weatherData.icon" />
    </div>
    <div class="temp">{{ `${kelvinToCelsius(props.weatherData.temp)}&deg;` }}</div>
    <div class="text">{{ props.weatherData.text }}</div>
    <div class="location">{{ props.weatherData.city }}</div>
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
