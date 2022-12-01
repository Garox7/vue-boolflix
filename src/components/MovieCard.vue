<template>
  <div class="boxart-image">
    <h4>{{ title }}</h4>
    <lang-flag :iso="language" />
    <p>{{ vote }}</p>
    <p>{{ story }}</p>
  </div>
</template>

<script>
export default {
  name: 'MovieCard',
  props: {
    cover: String,
    title: String,
    language: String,
    vote: Number,
    story: String,
  },
};
</script>

<style>

</style>
