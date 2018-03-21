import Vue from "vue";
import Router from "vue-router";
import homePage from "./views/Home";
import editPage from './views/Edit';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/home",
      name: "home",
      component: homePage
    },
    {
      path: '/edit',
      name: 'edit',
      component: editPage
    },
    {
      path: "/",
      redirect: "/home"
    }
  ]
});
