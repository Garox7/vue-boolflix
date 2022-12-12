<template>
  <div>
    <HeaderApp
      @Searching="getSearchString"
    />
    <MainApp
      :arrPopular="arrPopular"
      :arrPopularTv="arrPopularTv"
      :arrTopRated="arrTopRated"
      :arrTopRatedTv="arrTopRatedTv"
      :playSearch="playSearch"
      :arrMovies="arrMovies"
      :arrTvSeries="arrTvSeries"
    />
  </div>
</template>

<script>
import axios from 'axios';
import HeaderApp from '@/components/HeaderApp.vue';
import MainApp from '@/components/MainApp.vue';

export default {
  name: 'App',
  components: {
    HeaderApp,
    MainApp,
  },
  data() {
    return {
      baseApiUrl: 'https://api.themoviedb.org/3',
      apiKey: '0762e7bce5e66e0277c5c0d33a1112fc',
      resultsLanguage: 'it-IT',
      playSearch: false,
      arrPopular: [],
      arrPopularTv: [],
      arrTopRated: [],
      arrTopRatedTv: [],
      arrMovies: [],
      arrTvSeries: [],
    };
  },
  created() {
    // Film POPOLARI
    axios.get(`${this.baseApiUrl}/movie/popular`, {
      params: {
        api_key: this.apiKey,
        language: this.resultsLanguage,
      },
    })
      .then((responseAxios) => {
        responseAxios.data.results.forEach((movie) => {
          if (movie.overview !== '') {
            this.arrPopular.push(movie);
          }
        });
        console.log('I titoli del momento:', this.arrPopular); // DEBUG
      });

    // SerieTv POPOLARI
    axios.get(`${this.baseApiUrl}/tv/popular`, {
      params: {
        api_key: this.apiKey,
        language: this.resultsLanguage,
      },
    })
      .then((responseAxios) => {
        this.arrPopularTv = responseAxios.data.results;
        console.log('SerieTv del momento', this.arrPopularTv); // DEBUG
      });

    // Film Più votati in Italia
    axios.get(`${this.baseApiUrl}/movie/top_rated`, {
      params: {
        api_key: this.apiKey,
        language: this.resultsLanguage,
        region: 'IT',
      },
    })
      .then((responseAxios) => {
        this.arrTopRated = responseAxios.data.results;
        console.log('Top Rated:', this.arrTopRated); // DEBUG
      });

    // Serie Tv Più votate
    axios.get(`${this.baseApiUrl}/tv/top_rated`, {
      params: {
        api_key: this.apiKey,
        language: this.resultsLanguage,
      },
    })
      .then((responseAxios) => {
        this.arrTopRatedTv = responseAxios.data.results;
        console.log('Top Rated Serie TV:', this.arrTopRatedTv); // DEBUG
      });
  },
  methods: {
    getSearchString(searchString) {
      if (searchString !== '') {
        this.playSearch = true;

        // Ricerca FILM
        axios.get(`${this.baseApiUrl}/search/movie`, {
          params: {
            api_key: this.apiKey,
            language: this.resultsLanguage,
            query: searchString,
          },
        })
          .then((responseAxios) => {
            this.arrMovies = responseAxios.data.results;
            console.log('film:', this.arrMovies); // DEBUG
          });

        // Ricerca SERIE TV
        axios.get(`${this.baseApiUrl}/search/tv`, {
          params: {
            api_key: this.apiKey,
            language: this.resultsLanguage,
            query: searchString,
          },
        })
          .then((responseAxios) => {
            this.arrTvSeries = responseAxios.data.results;
            console.log('serie Tv:', this.arrTvSeries); // DEBUG
          });
      }
    },
  },
};
</script>

<style lang="scss">
@import '@/assets/scss/reset';
@import '@/assets/scss/variables';
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800&display=swap');

html {
  font-family: 'Inter', sans-serif;
}

body {
  background-color: $body-background-color;
  position: relative;
}

.no-scroll {
  overflow: hidden;
}
</style>
