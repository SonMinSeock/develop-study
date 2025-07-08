<script setup>
import Searchbar from "./Searchbar.vue";
import WeatherInfo from "./WeatherInfo.vue";

const emits = defineEmits(["onSearchCity"]);

// props 받아오기
const props = defineProps({
  weatherData: Object,
});

// 자식에게 받은 데이터를 받아오기
const onSearchCity = (city) => {
  emits("onSearchCity", city);
};
</script>
<template>
  <div class="container">
    <Searchbar @onSearchCity="onSearchCity" />
    <WeatherInfo :weatherData="props.weatherData" />
  </div>
</template>
<style lang="scss"></style>
