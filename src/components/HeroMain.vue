<template>
  <div class="hero__slide" :style="{backgroundImage: `url(${cover})`}">
    <div class="hero__info">
      <h1>{{ arrPopular[randomSlideLen].title }}</h1>
      <p>{{ arrPopular[randomSlideLen].overview }}</p>

      <div class="hero__button">
        <button class="play__btn">Riproduci</button>
        <button class="info__btn">Altre info</button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HeroMain',
  components: {
  },
  props: {
    arrPopular: Array,
    cover: String,
    randomSlideLen: Number,
  },
  data() {
    return {
      baseImgUrl: 'https://image.tmdb.org/t/p/',
      sizeImg: 'w1280/',
      apiKey: '?api_key=0762e7bce5e66e0277c5c0d33a1112fc',
    };
  },
};

</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';

.hero__slide {
  width: $hero-w;
  height: 80vh;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;

  .hero__info {
    background: linear-gradient(90deg,rgba(0,0,0,.8),transparent 85%);
    color: white;
    width: 40%;
    height: 100%;
    padding-left: 4%;
    padding-bottom: 4%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
      font-size: 45px;
      line-height: 1;
      margin-bottom: $margin-info-b;
    }

    p {
      font-size: 1.2vw;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      line-clamp: 4;
      -webkit-box-orient: vertical;
      margin-bottom: $margin-info-b;
    }
  }

  .hero__button {
    .play__btn, .info__btn {
      font-size: 16px;
      font-weight: 600;
      width: 150px;
      height: 40px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: all .15s ease-in-out;
    }

    .play__btn {
      background-color: $play-btn-bg;
      color: $play-btn-color;
      margin-right: 10px;

      &:hover {
        background-color: $play-btn-bg-h;
      }
    }

    .info__btn {
      background-color: $info-btn-bg;
      color: $info-btn-color;

      &:hover {
        background-color: $info-btn-bg-h;
      }
    }
  }
}
</style>
