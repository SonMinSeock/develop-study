<template>
  <section id="about" class="container">
    <h1>About</h1>
    <div class="row gx-5">
      <figure class="col-md-6">
        <img src="../assets/images/profile.jpg" alt="profile" />
        <figcaption>About Michael Kwon</figcaption>
      </figure>
      <p class="col-md-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ullam commodi eaque placeat iusto
        adipisci cum voluptatibus nemo impedit expedita maxime voluptates, modi eum iure neque sapiente nulla facilis
        rem?
      </p>
    </div>
    <article class="row mt-5">
      <h2>Skills</h2>
      <dl>
        <template v-for="skill in skills" :key="skill.id">
          <dt class="lead">{{ skill.name }}</dt>
          <dd>
            <!-- 시각적인 그래프 보여주고자 한다-->
            <div class="progress" role="progressbar">
              <div class="progress-bar" :style="{ width: skill.point }"></div>
            </div>
          </dd>
        </template>
      </dl>
    </article>
  </section>
</template>
<script setup>
import skills from "../assets/skills";
</script>
<style lang="scss">
figure {
  img {
    width: 100%;
  }
}
</style>
