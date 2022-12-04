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
            <font-awesome-icon icon="fa-solid fa-play" class="my__icon play" />
          </div>
          <div class="my__icon__container">
            <font-awesome-icon icon="fa-solid fa-plus" class="my__icon" />
          </div>
          <div class="my__icon__container">
            <font-awesome-icon icon="fa-solid fa-thumbs-up" class="my__icon" />
          </div>
        </div>

        <div class="controls__right">
          <div class="my__icon__container">
            <font-awesome-icon icon="fa-solid fa-chevron-down" class="my__icon" />
          </div>
        </div>
      </div>
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
  flex: 1 0 calc(100% / 6 - 3rem);
  background-color: $bg-boxart;
  color: white;
  min-width: 100px;
  height: 320px;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
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
