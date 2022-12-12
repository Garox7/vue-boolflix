<template>
  <div class="boxart__card">

    <div class="movie__container">
      <img v-if="cover" :src="cover" :alt="title">
      <div v-else class="default__no-image">B</div>

      <div class="movie__info__primary">
        <div class="movie__language">
          <span>Lingua originale </span>
          <lang-flag :iso="language" />
        </div>
        <div class="movie__score">
          <p>Voto</p>
          <span>
            <font-awesome-icon v-for="i in vote.score"
              :key="i" icon="fa-solid fa-star" class="my__icon"
            />
          </span>
          <span>
            <font-awesome-icon v-for="i in (vote.maxVote - vote.score)"
              :key="i" icon="fa-regular fa-star" class="my__icon"
            />
          </span>
        </div>
      </div>
    </div>

    <div class="movie__info__secondary">
      <h4>{{ title }}</h4>
      <!-- <p class="story">{{ story }}</p> -->
      <div class="movie__info__controls">

        <div class="controls__left">
          <div class="my__icon__container">
            <font-awesome-icon icon="fa-solid fa-play" class="my__icon" />
          </div>
          <div class="my__icon__container">
            <font-awesome-icon icon="fa-solid fa-plus" class="my__icon" />
          </div>
          <div class="my__icon__container">
            <font-awesome-icon icon="fa-solid fa-thumbs-up" class="my__icon" />
          </div>
        </div>

        <div class="controls__right">
          <div
            @click="showMovieCardInfo"
            @keydown="showMovieCardInfo"
            class="my__icon__container"
          >
            <font-awesome-icon icon="fa-solid fa-chevron-down" class="my__icon" />
          </div>
        </div>
      </div>
    </div>
    <MovieCardInfo v-show="showCardInfo"
      :backdrop="backdrop"
      :title="title"
      :language="language"
      :vote="vote"
      :story="story"
      :arrGenres="arrGenres"
      :arrCast="arrCast"
      :releaseDate="releaseDate"
      :runtime="runtime"
      :numOfSeason="numOfSeason"
      :similarMovie="similarMovie"
      @hiddenMovieCardInfo="hiddenMovieCardInfo"
    />
  </div>
</template>

<script>
import MovieCardInfo from '@/components/MovieCardInfo.vue';
import axios from 'axios';

export default {
  name: 'MovieCard',
  components: {
    MovieCardInfo,
  },
  props: {
    cover: String,
    backdrop: String,
    title: String,
    language: String,
    vote: Object,
    story: String,
    id: Number,
    movie: Boolean,
  },
  data() {
    return {
      showCardInfo: false,
      baseApiUrl: 'https://api.themoviedb.org/3',
      apiKey: '0762e7bce5e66e0277c5c0d33a1112fc',
      resultsLanguage: 'it-IT',
      arrGenres: [],
      arrCast: [],
      releaseDate: '',
      numOfSeason: 0,
      runtime: 0,
      similarMovie: [],
    };
  },
  methods: {
    // raccoglie ulteriori dati all'apertura di CardInfo
    getDetails() {
      if (this.movie) {
        console.log('è un film!'); // DEBUG
        // GENERI, RILASCIO, DURATA
        axios.get(`${this.baseApiUrl}/movie/${this.id}`, {
          params: {
            api_key: this.apiKey,
            language: this.resultsLanguage,
          },
        })
          .then((responseAxios) => {
            this.arrGenres = responseAxios.data.genres;
            this.releaseDate = responseAxios.data.release_date;
            this.runtime = responseAxios.data.runtime;

            console.log('Genere Film:', this.arrGenres); // DEBUG
            console.log('Data di rilascio Film:', this.releaseDate); // DEBUG
            console.log('Durata FIlm:', this.runtime); // DEBUG
            // CAST
            axios.get(`${this.baseApiUrl}/movie/${this.id}/credits`, {
              params: {
                api_key: this.apiKey,
              },
            })
              .then((axiosCast) => {
                this.arrCast = axiosCast.data.cast.splice(0, 5).map((actors) => actors.name);
                console.log('cast:', this.arrCast);
                // FILM SIMILI
                axios.get(`${this.baseApiUrl}/movie/${this.id}/similar`, {
                  params: {
                    api_key: this.apiKey,
                  },
                })
                  .then((axiosSimilar) => {
                    this.similarMovie = axiosSimilar.data.results.splice(0, 6);

                    console.log('Altri film simili', this.similarMovie); // DEBUG
                  });
              });
          });
      } else {
        console.log('è una serie tv!'); // DEBUG
        // GENERI, RILASCIO, DURATA
        axios.get(`${this.baseApiUrl}/tv/${this.id}`, {
          params: {
            api_key: this.apiKey,
            language: this.resultsLanguage,
          },
        })
          .then((responseAxios) => {
            this.arrGenres = responseAxios.data.genres;
            this.releaseDate = responseAxios.data.first_air_date;
            this.numOfSeason = responseAxios.data.number_of_seasons;

            console.log('Generi Serie Tv:', this.arrGenres); // DEBUG
            console.log('Data di rilascio Serie Tv:', this.releaseDate); // DEBUG
            console.log('Numero di stagioni', this.numOfSeason); // DEBUG
            // CAST
            axios.get(`${this.baseApiUrl}/tv/${this.id}/credits`, {
              params: {
                api_key: this.apiKey,
              },
            })
              .then((axiosCast) => {
                this.arrCast = axiosCast.data.cast.splice(0, 5).map((actor) => actor.name);
                // TITOLI SIMILI
                axios.get(`${this.baseApiUrl}/tv/${this.id}/similar`, {
                  params: {
                    api_key: this.apiKey,
                  },
                })
                  .then((axiosSimilar) => {
                    this.similarMovie = axiosSimilar.data.results.splice(0, 6);

                    console.log('altri serie tv simili:', this.similarMovie);
                  });
              });
          });
      }
    },
    // Apre MovieCardInfo
    showMovieCardInfo() {
      this.showCardInfo = true;
      document.body.classList.add('no-scroll');
      // genera la funzione di raccolta di informazioni sul singolo titolo
      this.getDetails();
    },
    hiddenMovieCardInfo(hidden) {
      this.showCardInfo = hidden;
      document.body.classList.remove('no-scroll');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';

.boxart__card {
  flex: 1 0 calc(100% / 6 - 3rem);
  background-color: $bg-boxart;
  color: white;
  min-width: 100px;
  height: 320px;
  border-radius: 8px;
  overflow: hidden;
  // position: relative;
  transition: all .2s ease;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 8px;
    transition: all .15s ease-in-out;
  }

  .default__no-image {
    color: #ee2414;
    height: 100%;
    width: 100%;
    font-size: 80px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .15s ease-in-out;
  }

  .movie__info__primary, .movie__info__secondary {
    display: none;
  }

}
.boxart__card:hover {
  background-color: #2b2b2b;
  box-shadow: 0 3px 8px 1px rgba(0 0 0 / .8);
  display: flex;
  flex-direction: column;

  & .movie__container {
    display: flex;
    margin-bottom: 10px;

    img {
      width: 35%;
      height: 100%;
    }

    .movie__info__primary {
      padding: 8px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: .8rem;

      .movie__language {
        font-size: 14px;
      }

      .movie__score {
        p {
          margin-bottom: 10px;
        }

          .my__icon {
            color: gold;
            font-size: 20px;
          }

      }
    }
  }
  .movie__info__secondary {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;

    .movie__info__controls {
      display: flex;
      width: 100%;
      padding: 5px;

      .controls__left {
        flex: 1 1 auto;
        display: flex;
        gap: 5%;

        .my__icon__container {
          border: 2px solid rgba(255, 255, 255, .75);
          width: 35px;
          height: 35px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          transition: all .2s ease;

          &:first-child {
            background-color: white;
            border: 2px solid white;

            .my__icon {
              color: #2b2b2b;
            }

            &:hover {
              background-color: rgba(255, 255, 255, .75);
              border: 2px solid rgba(255, 255, 255, .75);
            }
          }

          &:hover {
            border: 2px solid white;
          }

          .my__icon {
            font-size: 18px;
            color: white;
          }

        }
      }

      .controls__right {
        justify-self: flex-end;

        .my__icon__container {
          border: 2px solid rgba(255, 255, 255, .75);
          width: 35px;
          height: 35px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          transition: all .2s ease;

          .my__icon {
            font-size: 18px;
            color: white;
          }

          &:hover {
            border: 2px solid white;
          }
        }
      }
    }
  }
}

</style>
