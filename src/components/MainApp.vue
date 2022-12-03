<template>
  <div>
    <div v-if="(playSearch == false)">
      <HeroMain
        :arrPopular="arrPopular"
        :cover="getCoverImg(sizeImgHero, arrPopular[randomSlideLen].backdrop_path)"
        :randomSlideLen="randomSlideLen"
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
      <div class="main__container">
          <h3 class="title__boxart">Serie TV da vedere tutte d'un fiato</h3>
          <div class="boxart__container">
            <MovieCard v-for="movie in arrPopularTv"
              :key="movie.id"
              :cover="getCoverImg(sizeImgCard, movie.backdrop_path)"
              :title="movie.name"
              :language="movie.original_language"
              :vote="convertScore(movie.vote_average)"
              :story="movie.overview"
            />
          </div>
        </div>
    </div>

    <!-- viene mostrato solo se viene effettuata la ricerca -->
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
import MovieCard from '@/components/MovieCard.vue';

export default {
  name: 'MainApp',
  components: {
    HeroMain,
    MovieCard,
  },
  props: {
    arrPopular: Array,
    arrPopularTv: Array,
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
      randomSlideLen: 0,
    };
  },
  created() {
    this.randomSlideLen = Math.floor(Math.random() * 11);
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

/* Regole di stile per componente in Hero */
.hero__container__boxart {
  margin-top: -10% !important;
  padding: 2rem 0 0 0 !important;
  .hero__container__card {
    background: linear-gradient(
      180deg,
      transparent 10%,
      rgba(20 20 20 / .5) 30%,
      rgba(20 20 20 / 1) 60%
    );
  }
}

/* Regole di stile per componente in pagina */
.main__container {
  padding-top: 1.5rem !important;
}

.hero__container__boxart, .main__container, .container{
  // max-width: 1000px; /* test for scroll layout */
  margin: 0 auto;
  padding: 5rem 0 2rem 0; /* test for scroll layout */
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .title__boxart {
    color: $title-boxart-color;
    padding: 0 4%; /* test for scroll layout */
    z-index: 10;
  }

  .hero__container__card, .boxart__container {
    display: flex;
    // flex-wrap: wrap; /* test for scroll layout */
    justify-content: space-between;
    padding: 0 0 15px 4%; /* test for scroll layout */
    gap: 2rem .3rem;
    overflow-x: scroll; /* test for scroll layout */
  }
}
</style>
