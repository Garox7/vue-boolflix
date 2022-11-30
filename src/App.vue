<template>
  <div>
    <HeaderApp />
    <MainApp />
  </div>
</template>

<script>
import HeaderApp from '@/components/HeaderApp.vue';
import MainApp from '@/components/MainApp.vue';

export default {
  components: {
    HeaderApp,
    MainApp,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
