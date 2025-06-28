<script setup>
import data from "./assets/portfolio";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <Navbar />
  <router-view :data="data" />
</template>

<style scoped lang="scss"></style>
