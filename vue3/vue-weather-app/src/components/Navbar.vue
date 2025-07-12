<script setup></script>
<template>
  <nav class="navbar">
    <button class="toggle" @click="$store.commit('onToggle')">
      <font-awesome-icon class="icon" :icon="['fas', 'bars-staggered']" />
    </button>
  </nav>
</template>

<style lang="scss" scoped>
.navbar {
  background-color: #fff;
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: end;
  margin-bottom: 1rem;

  button {
    border: none;
    background: transparent;
    cursor: pointer;
  }

  .icon {
    color: #333;
    font-size: 24px;
  }
}
</style>
