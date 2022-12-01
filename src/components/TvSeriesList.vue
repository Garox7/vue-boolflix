<template>
  <div>
    <h1>Serie Tv</h1>
    <TvSeriesCard v-for="series in TvSeriesList"
      :key="series.id"
      :cover="series.poster_path"
      :title="series.name"
      :language="series.original_language"
      :vote="series.vote_average"
      :story="series.overview"
    />
  </div>
</template>

<script>
import TvSeriesCard from '@/components/TvSeriesCard.vue';

export default {
  name: 'TvSeriesList',
  components: {
    TvSeriesCard,
  },
  props: {
    TvSeriesList: Array,
  },
};
</script>

<style>

</style>
