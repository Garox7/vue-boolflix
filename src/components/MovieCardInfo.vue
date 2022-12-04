<template>
  <section class="container">
    <div class="card-info">
      <div class="backdrop__img" :style="{backgroundImage: `url(${backdrop})`}">
        <div class="wrap__img"></div>

        <div class="title__controls">
          <h1>{{ title }}</h1>
          <div class="controls">
            <button class="play__btn">
              <font-awesome-icon icon="fa-solid fa-play" class="my__icon" />
              Riproduci
            </button>
            <div class="icon__btn">
              <font-awesome-icon icon="fa-solid fa-plus" class="my__icon" />
            </div>
            <div class="icon__btn">
              <font-awesome-icon icon="fa-solid fa-thumbs-up" class="my__icon" />
            </div>
          </div>
        </div>

        <div
          @click="hiddenMovieCardInfo"
          @keydown="hiddenMovieCardInfo"
          class="close__btn"
        >
          <font-awesome-icon icon="fa-solid fa-xmark" />
        </div>
      </div>

      <div class="details__container">
        <div class="details">
          <div class="details__left">
            <div class="details__info">
              <div class="movie__score">
                <span>
                  <font-awesome-icon v-for="i in vote.score"
                    :key="i"
                    icon="fa-solid fa-star"
                    style="color: gold"/>
                </span>
                <span>
                  <font-awesome-icon v-for="i in (vote.maxVote - vote.score)"
                  :key="i"
                  icon="fa-regular fa-star"
                  style="color: gold"/>
                </span>
              </div>
              <p>{{ releaseDate.slice(0, 4) }}</p>
              <p v-if="runtime != ''">{{ runtime + ' min' }}</p>
              <p v-if="(numOfSeason && numOfSeason != 0)">
                {{ numOfSeason > 1 ? numOfSeason + ' Stagioni' : numOfSeason + ' Stagione' }}
              </p>
            </div>
            <p v-if="story != ''">{{ story }}</p>
            <p v-else>Nessuna descrizione per questo contenuto</p>
          </div>

          <div class="details__right">
            <div class="details__info">
              <span>Generi: </span>
              <span v-for="genre in arrGenres" :key="genre.id">
                {{ genre.name + ', ' }}
              </span>
            </div>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'MovieCardInfo',
  props: {
    backdrop: String,
    title: String,
    languege: String,
    vote: Object,
    story: String,
    arrGenres: Array,
    releaseDate: String,
    runtime: Number,
    numOfSeason: Number,
  },
  data() {
    return {
      hidden: false,
      isPlural: true,
    };
  },
  methods: {
    hiddenMovieCardInfo() {
      this.$emit('hiddenMovieCardInfo', this.hidden);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';

.container {
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100vh;
  position: fixed;
  inset: 0;
  overflow-y: scroll;
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all .2s ease;
  box-shadow: rgb(0 0 0 / 75%) 0px 3px 10px;

  .card-info {
    background-color: #181818;
    max-width: 45%;
    min-width: 800px;
    max-height: 200vh;
    min-height: 800px;
    margin: 15vh 0 10vh;
    position: static;
    // overflow: auto;
    border-radius: 10px;
    z-index: 40;

    .backdrop__img {
      height: 500px;
      border-radius: 10px 10px 0 0;
      background-position: top;
      background-size: cover;
      background-repeat: no-repeat;
      position: relative;

      .wrap__img {
        background:linear-gradient(0deg,#181818,transparent 50%);
        width: 100%;
        height: 100%;
        position: absolute;
      }

      .title__controls {
        width: 40%;
        position: absolute;
        bottom: 5%;
        left: 3rem;

        h1 {
          font-size: 30px;
          margin-bottom: 2rem;
        }

        .controls {
          display: flex;
          margin-bottom: 2rem;

          .play__btn {
            background-color: $play-btn-bg;
            color: $play-btn-color;
            font-size: 18px;
            font-weight: 600;
            margin-right: 10px;
            width: 180px;
            height: 42px;
            border: none;
            border-radius: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8%;
            cursor: pointer;
            transition: all .15s ease-in-out;

            .my__icon {
              font-size: 32px;
            }

            &:hover {
              background-color: #e6e6e6;
            }
          }

          .icon__btn {
            width: 42px;
            height: 42px;
            margin-left: 8px;
            border: 2px solid #ffffff80;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: border .15 ease;

            &:hover {
              border: 2px solid white;
            }
          }
        }
      }
      .close__btn {
        background-color: #181818;
        width: 36px;
        height: 36px;
        font-size: 24px;
        margin: 1rem;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        right: 0;
        cursor: pointer;
      }
    }

    .details__container {
      width: 100%;
      padding: 1rem 3rem;

      .details {
        width: 100%;
        display: flex;
        column-gap: 2rem;

        .details__left {
          flex: 1 1 65%;
          display: flex;
          flex-direction: column;

          .details__info {
            display: flex;
            gap: 1rem;
            margin-bottom: 32px;
          }

          p {
            line-height: 26px;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 4;
            line-clamp: 4;
            -webkit-box-orient: vertical;
            overflow: hidden;

          }
        }

        .details__right {
          flex: 1 1 35%;

          .details__info {
            font-size: 14px;
            color: white;

            span:first-child {
              color: #777777;
            }
          }
        }
      }
    }
  }
}
</style>
