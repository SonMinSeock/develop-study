<script setup>
import Searchbar from "./Searchbar.vue";
import WeatherInfo from "./WeatherInfo.vue";

const emits = defineEmits(["onSearchCity"]);
</script>
<template>
  <div class="container">
    <Searchbar />
    <WeatherInfo />
  </div>
</template>
<style lang="scss">
.container {
  padding: 20px;
}
</style>
