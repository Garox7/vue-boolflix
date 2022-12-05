<template>
  <div class="container">
    <h1>Altri titoli simili</h1>
    <div class="similar-title__container">
      <div v-for="movie in similarMovie"
        :key="movie.id"
        class="similar-title__card">
        <div class="backdrop__img"
          :style="{backgroundImage: `url(${getCoverImg(sizeImgHero, movie.backdrop_path)})`}">
          <div class="play__btn">
            <font-awesome-icon icon="fa-solid fa-play" />
          </div>
        </div>
        <div class="similar-title__info">
          <h3>{{ movie.title }}</h3>
          <p>{{ movie.release_date.slice(0, 4) }}</p>
          <p>{{ movie.overview }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SimilarTitle',
  props: {
    similarMovie: Array,
  },
  data() {
    return {
      baseImgUrl: 'https://image.tmdb.org/t/p/',
      sizeImgHero: 'w300',
      apiKey: '?api_key=0762e7bce5e66e0277c5c0d33a1112fc',
    };
  },
  methods: {
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
.container {
  height: 100%;
  display: flex;
  flex-direction: column;

  h1 {
    margin: 40px 0 20px;
  }

  .similar-title__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1rem;
    margin: 0 0 3rem;
    cursor: pointer;

    .similar-title__card {
      background-color: #2f2f2f;
      flex: 1 1 calc(100% / 3 - 1rem);
      min-width: 220px;
      min-height: 340px;
      border-radius: 4px;

      .backdrop__img {
        height: 40%;
        border-radius: 4px 4px 0 0;
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        display: flex;
        align-items: center;
        justify-content: center;

        .play__btn {
          opacity: 0;
          background-color: #2f2f2f6f;
          font-size: 32px;
          width: 48px;
          height: 48px;
          border: 2px solid white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all .2s ease-in-out;
        }

        &  .fa-play {
          transform: translate(5%, 0);
        }

        &:hover .play__btn {
          opacity: 1;
        }
      }

      .similar-title__info {
        padding: 0 1rem 1rem;

        h3 {
          margin: 15px 0 4px;
        }

        p {
          margin: 0 0 12px;
        }

        p:last-child {
          color: #d2d2d2;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 5;
          line-clamp: 5;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      }
    }
  }
}
</style>
