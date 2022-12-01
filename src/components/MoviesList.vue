<template>
  <div>
    <h1>Film</h1>
    <MovieCard v-for="movie in MovieList"
      :key="movie.id"
      :cover="movie.poster_path"
      :title="movie.title"
      :language="movie.original_language"
      :vote="movie.vote_average"
      :story="movie.overview"
    />
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
};
</script>

<style>

</style>
