<template>
  <div class="boxart__card">
    <img v-if="cover"
      :src="(baseImgUrl + sizeImg + cover + apiKey)"
      :alt="title"
    >
    <div v-else class="default__no-image">B</div>

    <div class="card__info">
      <h4>{{ title }}</h4>
      <div>
        <span>Lingua originale </span>
        <lang-flag :iso="language" />
      </div>
      <div class="score">
        <font-awesome-icon v-for="i in vote.score"
          :key="i"
          icon="fa-solid fa-star"
        />
        <font-awesome-icon v-for="i in (vote.maxVote - vote.score)"
          :key="i"
          icon="fa-regular fa-star"
        />
      </div>
      <p class="story">{{ story }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieCard',
  props: {
    cover: String,
    title: String,
    language: String,
    vote: Object,
    story: String,
  },
  data() {
    return {
      baseImgUrl: 'https://image.tmdb.org/t/p/',
      sizeImg: 'w342/',
      apiKey: '?api_key=0762e7bce5e66e0277c5c0d33a1112fc',
    };
  },
};
</script>

<style lang="scss" scoped>
.boxart__card {
  flex: 1 0 calc(100% / 5 - 4rem);
  color: white;
  min-width: 200px;
  height: 350px;
  border-radius: 8px;
  overflow: hidden;

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

  .card__info {
    opacity: 0;
    height: 90%;
    padding: .5rem;
    display: flex;
    flex-direction: column;
    gap: .5rem;
    transition: all .1s linear;

    h4 {
      font-size: 20px;
    }

    .story {
      overflow-y: scroll;
    }
  }

  &:hover img {
    height: 0%;
  }

  &:hover .default__no-image {
    height: 0%;
    display: none;
  }

  &:hover .card__info {
    opacity: 1;
  }
}
</style>
