<template>
  <section id="title">
    <div class="container">
      <div class="detail row">
        <figure class="col-md-6">
          <img src="../assets/images/title.png" alt="title" />
        </figure>
        <div class="text col-md-6">
          <!-- 변수에 태그가 있고 그대로 쓰고 싶으면 (v-html = "변수명")으로 사용하면 된다. -->
          <h2 v-html="title"></h2>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const title = "Hello, <br /> I'm Son MinSeok";
</script>
<style scoped lang="scss">
#title {
  .container {
    $navbar_height: 56px; // navbar 높이값
    height: 100vh;
    padding: $navbar_height;

    .row {
      height: 100%;
      flex-direction: row-reverse;
    }
  }

  figure {
    img {
      width: 100%;
    }
    display: grid;
    place-items: center;
  }

  .text {
    h2 {
      font-size: 4em;
    }

    display: grid;
    place-items: center;
  }
}
</style>
