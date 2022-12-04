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
        <div class="boxart__container">
          <MovieCard v-for="movie in arrPopular"
            :key="movie.id"
            :cover="getCoverImg(sizeImgCard, movie.poster_path)"
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
            :cover="getCoverImg(sizeImgCard, movie.poster_path)"
            :title="movie.name"
            :language="movie.original_language"
            :vote="convertScore(movie.vote_average)"
            :story="movie.overview"
          />
        </div>
      </div>
      <div class="main__container">
        <h3 class="title__boxart">Top Film in Italia</h3>
        <div class="boxart__container">
          <MovieCard v-for="movie in arrTopRated"
            :key="movie.id"
            :cover="getCoverImg(sizeImgCard, movie.poster_path)"
            :title="movie.title"
            :language="movie.original_language"
            :vote="convertScore(movie.vote_average)"
            :story="movie.overview"
          />
        </div>
      </div>
      <div class="main__container">
        <h3 class="title__boxart">Serie TV acclamate dalla critica</h3>
        <div class="boxart__container">
          <MovieCard v-for="movie in arrTopRatedTv"
            :key="movie.id"
            :cover="getCoverImg(sizeImgCard, movie.poster_path)"
            :title="movie.name"
            :language="movie.original_language"
            :vote="convertScore(movie.vote_average)"
            :story="movie.overview"
          />
        </div>
      </div>
    </div>

    <!-- viene mostrato solo se viene effettuata la ricerca -->
    <div v-else>
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
    arrTopRated: Array,
    arrTopRatedTv: Array,
    playSearch: Boolean,
    arrMovies: Array,
    arrTvSeries: Array,
  },
  data() {
    return {
      baseImgUrl: 'https://image.tmdb.org/t/p/',
      sizeImgCard: 'w342',
      sizeImgHero: 'w1280',
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
  margin-top: -12% !important;
  padding: 2rem 0 0 0 !important;
  background-color: transparent;
  background-image: linear-gradient(
    180deg,
    hsla(0,0%,8%,0) 0,
    hsla(0,0%,8%,.15) 15%,
    hsla(0,0%,8%,.35) 30%,
    hsla(0,0%,8%,.58) 40%,
    #141414 50%,
    #141414
  );
  z-index: 10;
}

/* Regole di stile per componente in pagina */
.main__container {
  padding-top: 1.5rem !important;
}

.hero__container__boxart, .main__container, .container{
  margin: 0 auto;
  padding: 5rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .title__boxart {
    color: $title-boxart-color;
    padding: 0 4%;
    z-index: 10;
    font-weight: 500;
    font-size: 1.4vw;
  }

  .boxart__container {
    display: flex;
    justify-content: space-between;
    padding: 0 0 15px 4%;
    gap: 2rem .3rem;
    overflow-x: scroll;
  }

  // .boxart__container:hover .prova__container {
  //   transform: translateX(-25%);
  // }

  // .boxart__container .prova__container:hover {
  //   transform: scale(1.5);
  // }

  // .prova__container:hover ~ .prova__container {
  //   transform:translate(25%)
  // }
}
</style>
