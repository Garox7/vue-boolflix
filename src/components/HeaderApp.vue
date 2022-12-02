<template>
  <header>
    <div class="logo">
      <h1>BOOLFLIX</h1>
    </div>
    <div>
      <form @submit.prevent="$emit('Searching', searchString)">
        <label for="input-search">
          <input
            type="text"
            id="input-search"
            placeholder="Titoli, persone, generi"
            v-model="searchString"
          >
        </label>
        <button>Cerca</button>
      </form>
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
  background-color: $header-bg-color;
  background-image: $header-bg-image-color;
  position: fixed;
  top: 0;
  width: 100%;
  height: $header-h;
  padding: 0 4%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    color: $header-logo-color;
  }
}
</style>
