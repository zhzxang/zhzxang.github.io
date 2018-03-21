import Vue from 'vue';
import router from './route'
import App from './App';

import './styles/index.css';

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

