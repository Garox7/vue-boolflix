import Vue from 'vue';
import LangFlag from 'vue-lang-code-flags';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.component('lang-flag', LangFlag);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
