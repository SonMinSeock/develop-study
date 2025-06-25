<script setup></script>

<template>
  <div class="parent">
    <h1 class="display-1">App</h1>
    <button class="btn btn-primary">button</button>
  </div>
  <h1>heading 1</h1>
</template>

<!-- lang 속성이용하여 scss 언어 이용한다고 선언해준다. -->
<style scoped lang="scss">
.parent {
  h1 {
    color: red;
  }

  button {
    color: yellow;
  }
}
</style>
