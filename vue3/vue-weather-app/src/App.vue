<script setup>
import MainComp from "./components/MainComp.vue";
import Navbar from "./components/Navbar.vue";
import { ref, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();

// 앱이 실행되면 날씨 데이터 가져오기
onMounted(() => {
  store.dispatch("getWeather");
});
</script>

<template>
  <button @click="$store.dispatch('getWeather')">Action 함수 dispatch로 호출해보기 - getWeather</button>
  <Navbar />
  <MainComp />
</template>

<style lang="scss" scoped></style>
