import { createRouter, createWebHistory } from "@ionic/vue-router";
import Auth from "../pages/Auth.vue";
import Login from "../pages/Login.vue";
import Home from "../pages/Home.vue";
import store from "../store.js";
const routes = [
  {
    path: "/",

    redirect: (to) => {
      if (store.state.user) {
        return "/home";
      }
      return "/auth";
    },
  },
  {
    path: "/auth",
    component: Auth,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/home",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
