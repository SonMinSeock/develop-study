<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  width?: string;
  height?: string;
  borderRadius?: string;
}>();

const style = computed(() => ({
  width: props.width ?? "100%",
  height: props.height ?? "1rem",
  borderRadius: props.borderRadius ?? "4px",
}));
</script>

<template>
  <div class="skeleton-box" :style="style" />
</template>

<style scoped lang="scss">
.skeleton-box {
  background-color: #e0e0e0;
  animation: pulse 1.5s infinite ease-in-out;
}

@keyframes pulse {
  0% {
    background-color: #eee;
  }
  50% {
    background-color: #ddd;
  }
  100% {
    background-color: #eee;
  }
}
</style>
