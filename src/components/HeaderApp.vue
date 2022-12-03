<template>
  <header>
    <a class="logo"><h1>BOOLFLIX</h1></a>
    <nav class="navigation">
      <a href="">Home</a>
      <a href="">Serie TV</a>
      <a href="">Film</a>
    </nav>
    <div class="secondary__navigation">
      <label for="input-search">
        <input
          type="text"
          id="input-search"
          placeholder="Titoli, persone, generi"
          v-model="searchString"
        >
      </label>
      <button @click="$emit('Searching', searchString)">
        Cerca
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderApp',
  data() {
    return {
      searchString: '',
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';

header {
  background-color: $header-bg-color-initial;
  background-image: $header-bg-image-color;
  position: fixed;
  top: 0;
  width: 100%;
  height: $header-h;
  padding: 0 4%;
  display: flex;
  align-items: center;
  z-index: 20;

  .logo {
    color: $header-logo-color;
    margin-right: 30px;
  }

  .navigation {
    flex: 1 1 auto;
    display: flex;
    gap: 1rem;

    a {
      color: $header-link-color;
      font-size: 14px;
      text-decoration: none;
      transition: all .2s ease-in-out;

      &:hover {
        color: $header-link-color-h;
      }

      &:active {
        color: #fff;
        text-decoration: underline;
      }
    }

  }
}
</style>
