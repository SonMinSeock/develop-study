<script setup>
import MainComp from "./components/MainComp.vue";
import Navbar from "./components/Navbar.vue";
import { ref, onMounted } from "vue";

// 날씨 데이터 상태변수
const weatherData = ref({
  icon: "icon",
  temp: 0,
  text: "text",
  location: "location",
  city: "seoul",
});

// 앱이 실행되면 날씨 데이터 가져오기
onMounted(() => {
  console.log("Mounted!");
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${weatherData.value.city}&appid=1b8d6583611cf270344d65ff3f3fc115`;
  fetch(API_URL)
    .then((res) => res.json())
    .then((data) => {
      weatherData.value.icon = data.weather[0].icon;
      weatherData.value.temp = data.main.temp;
      weatherData.value.text = data.weather[0].description;
      weatherData.value.location = data.sys.country;
      weatherData.value.city = data.name;
    });
});
</script>

<template>
  <Navbar />
  <MainComp :weatherData="weatherData" />
</template>

<style lang="scss" scoped></style>
