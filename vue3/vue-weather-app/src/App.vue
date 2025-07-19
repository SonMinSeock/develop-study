<script setup>
import About from "./components/About.vue";
import MainComp from "./components/MainComp.vue";
import Navbar from "./components/Navbar.vue";
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useStore } from "./store/store";

const store = useStore();
const { toggle } = storeToRefs(store);
// 앱이 실행되면 날씨 데이터 가져오기
onMounted(() => {
  store.getWeather();
});
</script>

<template>
  <!-- <button @click="$store.dispatch('getWeather')">Action 함수 dispatch로 호출해보기 - getWeather</button> -->
  <Navbar />
  <div v-if="!toggle">
    <MainComp />
  </div>
  <div v-else>
    <About />
  </div>
</template>

<style lang="scss" scoped></style>
