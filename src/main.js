import Vue from 'vue';
import router from './route'
import App from './App';

import './styles/index.css';
import 'github-markdown-css';
import 'highlight.js/styles/default.css';

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
