<template>
  <div class="boxart__card">
    <img v-if="cover" :src="cover" :alt="title">
    <div v-else class="default__no-image">B</div>
    <div class="title__visible">
      <p>{{ title }}</p>
    </div>

    <div class="card__info">
      <h4>{{ title }}</h4>
      <div>
        <span>Lingua originale </span>
        <lang-flag :iso="language" />
      </div>
      <div class="score">
        <span>
          <font-awesome-icon v-for="i in vote.score"
            :key="i" icon="fa-solid fa-star"
          />
        </span>
        <span>
          <font-awesome-icon v-for="i in (vote.maxVote - vote.score)"
            :key="i" icon="fa-regular fa-star"
          />
        </span>
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
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';

.boxart__card {
  flex: 1 0 calc(100% / 4 - 3rem);
  background-color: $bg-boxart;
  color: white;
  min-width: 260px;
  height: 170px;
  border-radius: 8px;
  overflow: hidden;
  position: relative;

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

  .title__visible {
    background: linear-gradient(
      180deg,
      transparent 10%,
      rgba(20 20 20 / .6)
    );
    opacity: 1;
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    height: 30%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    border-radius: 0 0 8px 8px;
    transition: all .1s linear;

    p {
     margin: 0 0 2% 2%;
    }
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

  &:hover .title__visible {
    opacity: 0;
  }

  &:hover .card__info {
    opacity: 1;
  }
}
</style>
