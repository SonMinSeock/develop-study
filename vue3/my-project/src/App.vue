<!-- <script setup> 속성은 **더 간단하고 직관적인 문법(syntax sugar)**을 제공해주는 방식. -->

<script setup>
import { ref, onMounted, watch } from "vue";
import ChildComp from "./components/ChildComp.vue";

let count = ref(0); // 상태변수 초기값
let title = "Hello World"; // 변수
let color = ref("green");

onMounted(() => {
  console.log("mounted");
});

// 메서드 정의
const increaseCount = () => {
  count.value++;
};

// watch - 감시 함수
// color 상태가 변경되면 두 번째 인자 콜백 실행
watch(color, () => {
  console.log("color 변경");
});
</script>

<template>
  <div>
    <h1>{{ title }}</h1>
    <button @click="increaseCount">count++</button>
    <p>{{ count }}</p>
    <ChildComp :color="color" bgColor="yellow" />
    <button @click="color = 'red'">change color</button>
  </div>
</template>

<style scoped></style>
