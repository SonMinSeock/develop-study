<script setup>
import { ref } from "vue";

function debounce(func, wait) {
  let timeout;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func();
    }, wait);
  };
}

function throttle(func, limit) {
  let inThrottle = false;
  return function () {
    if (!inThrottle) {
      func();
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}

const inputText = ref("");
const clickCount = ref(0);

const handleInput = () => {
  console.log("📄 디바운싱된 입력:", inputText.value);
};

const handleClick = () => {
  console.log("🚀 쓰로틀링된 클릭!");
  clickCount.value++;
};

const debouncedInput = debounce(handleInput, 500);
const throttledClick = throttle(handleClick, 1000);
</script>
<template>
  <div class="container">
    <h2 class="mb-3 text-primary">디바운싱 예제</h2>
    <input
      type="text"
      class="form-control mb-4"
      v-model="inputText"
      @input="debouncedInput"
      placeholder="500ms 멈추면 콘솔 출력"
    />

    <h2 class="mb-3 text-primary">쓰로틀링 예제</h2>
    <button class="btn btn-primary" @click="throttledClick">빠르게 눌러보세요!</button>
    <p class="mt-2">처리된 클릭 수: {{ clickCount }}</p>
  </div>
</template>
<style lang="scss">
.container {
  max-width: 600px;
}
</style>
