<!-- <script setup> 속성은 **더 간단하고 직관적인 문법(syntax sugar)**을 제공해주는 방식. -->

<script setup>
import { ref, onMounted } from "vue";

let count = ref(0); // 상태변수 초기값
let title = "Hello World"; // 변수

onMounted(() => {
  console.log("mounted");
});

// 메서드 정의
const increaseCount = () => {
  count.value++;
};
</script>

<template>
  <div>
    <h1>{{ title }}</h1>
    <button @click="increaseCount">count++</button>
    <p>{{ count }}</p>
  </div>
</template>

<style scoped></style>
