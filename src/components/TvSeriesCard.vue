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
  name: 'TvSeriesCard',
  props: {
    cover: String,
    title: String,
    vote: Number,
    story: String,
  },
};
</script>

<style>

</style>
