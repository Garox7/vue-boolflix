<template>
  <div>
    <div class="container">
      <h3 class="title__boxart">Serie Tv</h3>
      <div class="boxart__container">
        <TvSeriesCard v-for="series in TvSeriesList"
          :key="series.id"
          :cover="series.poster_path"
          :title="series.name"
          :language="series.original_language"
          :vote="convertScore(series.vote_average)"
          :story="series.overview"
        />
      </div>
    </div>
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
  methods: {
    convertScore(vote) {
      const maxVote = 5;
      const originalVote = 10;
      return {
        score: Math.round((vote * maxVote) / originalVote),
        maxVote,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';

.container {
  // max-width: 1000px; /* test for scroll layout */
  margin: 0 auto;
  padding: 2rem; /* test for scroll layout */
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .title__boxart {
    color: $title-boxart-color;
    padding: 0 4%; /* test for scroll layout */
  }

  .boxart__container {
    display: flex;
    // flex-wrap: wrap; /* test for scroll layout */
    justify-content: space-between;
    padding: 0 0 15px 4%; /* test for scroll layout */
    gap: 2rem 1rem;
    overflow-x: scroll; /* test for scroll layout */
  }
}
</style>
