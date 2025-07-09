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

// HTTP GET 요청 날씨 데이터 불러오기
const getWeather = () => {
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${weatherData.value.city}&appid=1b8d6583611cf270344d65ff3f3fc115`;
  fetch(API_URL)
    .then((res) => res.json())
    .then((data) => {
      weatherData.value.icon = data.weather[0].icon;
      weatherData.value.temp = data.main.temp;
      weatherData.value.text = data.weather[0].description;
      weatherData.value.location = data.sys.country;
      weatherData.value.city = data.name;
    })
    .catch("에러가 발생했습니다. 다시 시도해 주세요.");
};

// 앱이 실행되면 날씨 데이터 가져오기
onMounted(() => {
  getWeather();
});

const onSearchCity = (city) => {
  weatherData.value.city = city;
  getWeather();
};
</script>

<template>
  <button @click="$store.dispatch('getWeather')">Action 함수 dispatch로 호출해보기 - getWeather</button>
  <p>count: {{ $store.state.count }}</p>
  <button @click="$store.commit('addCount', 10)">count++</button>
  <Navbar />
  <MainComp :weatherData="weatherData" @onSearchCity="onSearchCity" />
</template>

<style lang="scss" scoped></style>
