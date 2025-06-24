<template>
  <div>
    <h2>Child Component</h2>
    <p :style="{ color: color, backgroundColor: bgColor }">{{ color }}</p>
  </div>
</template>

<script setup>
//  1. props 불러오는 방법
// defineProps 함수를 이용해서 전달 받은 props를 받을수 있다.
const props = defineProps({
  color: String, // props 명: props 타입
  bgColor: String,
});

console.log(props.color);
</script>
<style scoped></style>
