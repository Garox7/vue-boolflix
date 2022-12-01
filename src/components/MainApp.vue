<template>
  <div>
    <h1>FILM</h1>
    <ul v-for="objmovie in arrMovies" :key="objmovie.id">
      <li>
        {{objmovie.title}}
      </li>
    </ul>
    <h1>Serie TV</h1>
    <ul v-for="objseries in arrTvSeries" :key="objseries.id">
      <li>
        {{objseries.name}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MainApp',
  props: {
    arrMovies: Array,
    arrTvSeries: Array,
  },
};
</script>

<style lang="scss" scoped>

</style>
