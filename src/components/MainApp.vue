<template>
  <div>
    <div v-if="(playSearch == false)">
      <HeroMain
        :arrPopular="arrPopular"
        :cover="getCoverImg(sizeImgHero, arrPopular[0].backdrop_path)"
      />
      <div class="hero__container__boxart">
          <h3 class="title__boxart">I titoli del momento</h3>
          <div class="hero__container__card">
            <MovieCard v-for="movie in arrPopular"
              :key="movie.id"
              :cover="getCoverImg(sizeImgCard, movie.backdrop_path)"
              :title="movie.title"
              :language="movie.original_language"
              :vote="convertScore(movie.vote_average)"
              :story="movie.overview"
            />
          </div>
        </div>
    </div>

    <!-- only shown if you start the search -->
    <div v-if="(playSearch != false)">

        <!-- MOVIE  -->
      <section>
        <div class="container">
          <h3 class="title__boxart">Film</h3>
          <div class="boxart__container">
            <MovieCard v-for="movie in arrMovies"
              :key="movie.id"
              :cover="getCoverImg(sizeImgCard, movie.poster_path)"
              :title="movie.title"
              :language="movie.original_language"
              :vote="convertScore(movie.vote_average)"
              :story="movie.overview"
            />
          </div>
        </div>
      </section>

      <!-- TV SERIES  -->
      <section>
        <div>
          <div class="container">
            <h3 class="title__boxart">Serie Tv</h3>
            <div class="boxart__container">
              <MovieCard v-for="series in arrTvSeries"
                :key="series.id"
                :cover="getCoverImg(sizeImgCard, series.poster_path)"
                :title="series.name"
                :language="series.original_language"
                :vote="convertScore(series.vote_average)"
                :story="series.overview"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import HeroMain from '@/components/HeroMain.vue';
import MovieCard from '@/components/MovieCard.vue'; // TEST

export default {
  name: 'MainApp',
  components: {
    HeroMain,
    MovieCard, // TEST
  },
  props: {
    arrPopular: Array,
    playSearch: Boolean,
    arrMovies: Array,
    arrTvSeries: Array,
  },
  data() {
    return {
      baseImgUrl: 'https://image.tmdb.org/t/p/',
      sizeImgCard: 'w342/',
      sizeImgHero: 'w1280/',
      apiKey: '?api_key=0762e7bce5e66e0277c5c0d33a1112fc',
    };
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
    getCoverImg(size, pathUrl) {
      if (pathUrl) {
        return this.baseImgUrl + size + pathUrl + this.apiKey;
      }
      return null;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';

.hero__container__boxart {
  margin-top: -15% !important;

  .hero__container__card {
    background-image: linear-gradient(
      180deg,
      transparent 10%,
      rgba(20 20 20 / .5) 30%,
      rgba(20 20 20 / 1) 60%
    );
  }
}

.container, .hero__container__boxart {
  // max-width: 1000px; /* test for scroll layout */
  margin: 0 auto;
  padding: 5rem 0 2rem 0; /* test for scroll layout */
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .title__boxart {
    color: $title-boxart-color;
    padding: 0 4%; /* test for scroll layout */
  }

  .boxart__container, .hero__container__card {
    display: flex;
    // flex-wrap: wrap; /* test for scroll layout */
    justify-content: space-between;
    padding: 0 0 15px 4%; /* test for scroll layout */
    gap: 2rem .3rem;
    overflow-x: scroll; /* test for scroll layout */
  }
}
</style>
