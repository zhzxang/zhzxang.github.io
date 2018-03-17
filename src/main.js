import Vue from 'vue';
import router from './route'
import App from './App';

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

