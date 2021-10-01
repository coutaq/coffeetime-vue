import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import router from "./router";
import { IonicVue } from "@ionic/vue";
import axios from "axios";
import VueAxios from "vue-axios";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
/* Core CSS required for Ionic components to work properly */
import "@ionic/vue/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/vue/css/normalize.css";
import "@ionic/vue/css/structure.css";
import "@ionic/vue/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/vue/css/padding.css";
import "@ionic/vue/css/float-elements.css";
import "@ionic/vue/css/text-alignment.css";
import "@ionic/vue/css/text-transformation.css";
import "@ionic/vue/css/flex-utils.css";
import "@ionic/vue/css/display.css";

import "./theme/variables.css";
import "./styles/global.css";
import "./registerServiceWorker";
import store from "./store.js";
axios.defaults.baseURL = "http://localhost:8000/api";
axios.defaults.headers.common["Access-Control-Allow-Origin"] =
  "http://localhost:8081";
axios.defaults.headers.common["Accept"] = "application/json";
axios.defaults.withCredentials = true;
// axios.interceptors.request.use((request) => {
//   console.log("Starting Request", JSON.stringify(request, null, 2));
//   return request;
// });

// axios.interceptors.response.use((response) => {
//   console.log("Response:", JSON.stringify(response, null, 2));
//   return response;
// });
// Create a new store instance.
const firebaseConfig = {
  apiKey: "AIzaSyCPFEy1StRrZvvFXhoBDgko7WMIvTrOgDE",
  authDomain: "coffeetime-vue.firebaseapp.com",
  projectId: "coffeetime-vue",
  storageBucket: "coffeetime-vue.appspot.com",
  messagingSenderId: "1068730855717",
  appId: "1:1068730855717:web:ab11b0b637314111372acc",
  measurementId: "G-4MTSHK7B6N",
};

const fb = initializeApp(firebaseConfig);
const analytics = getAnalytics(fb);

createApp(App)
  .use(router)
  .use(IonicVue)
  .use(VueAxios, axios)
  .use(store)
  .mount("#app");
