<template>
  <section id="portfolio">
    <h1>Portfolio</h1>
    <ul class="list row">
      <li class="col-md-4" v-for="item in data" :key="item.id">
        <img :src="item.imgUrl" alt="work1" />
        <h3>{{ item.title }}</h3>
        <p>{{ item.desc }}</p>
      </li>
    </ul>
  </section>
</template>
<script setup>
import data from "../assets/portfolio";
</script>
<style scoped lang="scss">
#portfolio {
  Add commentMore actions h1 {
    margin-bottom: 1rem;
  }
  .list {
    list-style-type: none;
    padding: 0;

    li {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-bottom: 10vh;
      img {
        width: 100%;
        aspect-ratio: 16 / 9;
        object-fit: cover;
        object-position: top;
      }
      h4 {
        margin-top: 1rem;
      }
    }
  }
}
</style>
