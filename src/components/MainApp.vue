<template>
  <div>
    <div v-if="(playSearch != false)">
        <MovieList :MovieList="arrMovies"/>
        <TvSeriesList :TvSeriesList="arrTvSeries"/>
    </div>
  </div>
</template>

<script>
import MovieList from '@/components/MoviesList.vue';
import TvSeriesList from '@/components/TvSeriesList.vue';

export default {
  name: 'MainApp',
  components: {
    MovieList,
    TvSeriesList,
  },
  props: {
    arrMovies: Array,
    arrTvSeries: Array,
    playSearch: Boolean,
  },
};
</script>

<style lang="scss" scoped>

</style>
