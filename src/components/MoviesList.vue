<template>
  <div class="container">
    <h3 class="title__boxart">Film</h3>
    <div class="boxart__container">
      <MovieCard v-for="movie in MovieList"
        :key="movie.id"
        :cover="movie.poster_path"
        :title="movie.title"
        :language="movie.original_language"
        :vote="convertScore(movie.vote_average)"
        :story="movie.overview"
      />
    </div>
  </div>
</template>

<script>
import MovieCard from '@/components/MovieCard.vue';

export default {
  name: 'MoviesList',
  components: {
    MovieCard,
  },
  props: {
    MovieList: Array,
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
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .title__boxart {
    color: $title-boxart-color;
  }

  .boxart__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 2rem 1rem;
  }
}
</style>
