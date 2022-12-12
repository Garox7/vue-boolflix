<template>
  <div class="container">
    <div class="episode-selector-header flex-row-center">
      <h1>Episodi</h1>

      <h3 v-if="numOfSeason <= 1">{{ title }}</h3>
      <label v-else for="select-episodes">
        <select class="episode-selector-dropdown" name="select-episodes">
          <option v-for="season in numOfSeason" :key="season"
          :value="season">{{ 'Stagione ' + season }}</option>
        </select>
      </label>
    </div>
    <div class="episode-selector-container">
      <div v-for="episode in episodesOfSeason"
        :key="episode.id"
        class="container-episode flex-row-center">

        <span class="episode-num">{{ episode.episode_number }}</span>
        <div class="episode-image-wrapper flex-row-center">
          <img :src="getCoverImg(episode.still_path)" alt="">
          <div class="play-btn flex-row-center">
            <font-awesome-icon icon="fa-solid fa-play" />
          </div>
        </div>
        <div class="episode-info">
          <div class="episode-title flex-row-center">
            <h3>{{ episode.name }}</h3>
            <span>{{ episode.runtime + ' min' }}</span>
          </div>
          <p>{{ episode.overview }}</p>
        </div>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: 'episodesOfSeason',
  props: {
    episodesOfSeason: Array,
    numOfSeason: Number,
    title: String,
  },
  data() {
    return {
      seasonSelected: 1,
      baseImgUrl: 'https://image.tmdb.org/t/p/w300',
      sizeImgHero: '',
      apiKey: '?api_key=0762e7bce5e66e0277c5c0d33a1112fc',
    };
  },
  methods: {
    getCoverImg(pathUrl) {
      if (pathUrl) {
        return this.baseImgUrl + pathUrl + this.apiKey;
      }
      return null;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';
@import '@/assets/scss/reset';

.container {
  margin: 40px 0 0;

  .episode-selector-header {
    justify-content: space-between;
    padding-bottom: 20px;
    border-bottom: 1px solid #404040;

    .episode-selector-dropdown {
      background-color: rgb(36, 36, 36);
      color: white;
      font-size: 18px;
      font-weight: 500;
      min-width: 4rem;
      padding: .5rem 1rem;
      border: 0.1em solid rgb(77, 77, 77);
      border-radius: .2rem;

      &:focus-visible {
        outline: none;
      }
    }
  }

  .container-episode {
    padding: 1rem;
    border-bottom: 1px solid #404040;
    justify-content: flex-start;
    cursor: pointer;
    .episode-num {
      flex: 0 0 7%;
      color: #d2d2d2;
      font-weight: 400;
      font-size: 1.5rem;
    }

    .episode-image-wrapper {
      flex: 0 0 18%;
      position: relative;

      img {
        max-width: 100%;
        border-radius: 4px
      }

      .play-btn {
        opacity: 0;
        background-color: #2f2f2f6f;
        font-size: 32px;
        width: 48px;
        height: 48px;
        border: 1px solid white;
        border-radius: 50%;
        position: absolute;
        transition: all .2s ease-in-out;

        .fa-play {
          transform: translateX(5%);
        }
      }

      &:hover .play-btn {
        opacity: 1;
      }
    }

    .episode-info {
      flex: 0 0 70%;

      .episode-title {
        justify-content: space-between;
        padding: 16px 16px 8px;

        h3 {
          font-size: 16px;
          font-weight: 400;
        }
      }

      p {
        color: #d2d2d2;
        font-size: 14px;
        padding: 0 14px 14px;
      }
    }
  }
}
</style>
