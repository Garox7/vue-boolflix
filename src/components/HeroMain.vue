<template>
  <div class="hero__slide">
    <img :src="cover" alt="">

    <div class="hero__info">
      <h1>{{ arrPopular[0].title }}</h1>
      <p>{{ arrPopular[0].overview }}</p>

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
  height: $hero-h;
  // position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
  }

  .hero__info {
    color: white;
    position: absolute;
    left: 5%;
    bottom: 60%;
    width: 30%;
    transform: translate(0, 50%);

    h1 {
      font-size: 50px;
      margin-bottom: $margin-info-b;
    }

    p {
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
