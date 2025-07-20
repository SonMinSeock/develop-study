<script setup lang="ts">
import ProjectCardLazy from "./components/ProjectCardLazy.vue";
import ProjectCardNoLazy from "./components/ProjectCardNoLazy.vue";

const projects = new Array(20).fill(null).map((_, i) => ({
  image: `https://picsum.photos/seed/${i + 1}/600/600`,
  title: `프로젝트 ${i + 1}`,
  desc: "예시 설명",
  percent: 70,
  amount: 1000000,
  days: 10,
  owner: `개설자 ${i + 1}`,
  ownerImg: `https://picsum.photos/seed/avatar${i + 1}/40`,
}));
</script>

<template>
  <div class="container my-5">
    <h4 class="mb-4">Lazy 미적용</h4>

    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
      <div class="col" v-for="p in projects" :key="p.title">
        <ProjectCardNoLazy v-bind="p" />
      </div>
    </div>

    <h4 class="my-4">Lazy 적용</h4>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
      <div v-for="(p, i) in projects" :key="'lazy-' + i" class="col">
        <ProjectCardLazy v-bind="p" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
