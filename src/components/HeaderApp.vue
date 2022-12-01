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
header {
  background-color: rgb(20 20 20);
  height: 68px;
  padding: 0 4%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    color: rgb(238 36 20);
  }
}
</style>
