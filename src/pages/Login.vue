<template>
  <ion-page>
    <ion-content>
      <ion-header>
        <ion-toolbar>
          <ion-buttons>
            <ion-back-button color="medium"></ion-back-button>
          </ion-buttons>
          <ion-title>Coffeetime</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-grid>
        <ion-row>
          <ion-col>
            <ion-item>
              <ion-label position="floating">Логин или почта</ion-label>
              <ion-input v-model="login"></ion-input>
            </ion-item>
            <ion-item lines="none" color="danger" v-if="errors.login">
              <ion-label v-for="error in errors.login" :key="error">
                {{ error }}
              </ion-label>
            </ion-item>
            <ion-item>
              <ion-label position="floating">Пароль</ion-label>
              <ion-input v-model="password" type="password"></ion-input>
            </ion-item>
            <ion-item lines="none" color="danger" v-if="errors.password">
              <ion-label v-for="error in errors.password" :key="error">
                {{ error }}
              </ion-label>
            </ion-item>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <ion-button expand="block" color="primary" @click="loginUser">
              ВОЙТИ
            </ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonInput,
  IonBackButton,
  IonButtons,
  IonButton,
  IonTitle,
  IonToolbar,
  IonHeader,
  IonLabel,
  IonItem,
  IonCol,
  IonRow,
  IonGrid,
  IonContent,
  IonPage,
} from "@ionic/vue";
export default {
  components: {
    IonInput,
    IonBackButton,
    IonButtons,
    IonButton,
    IonTitle,
    IonToolbar,
    IonHeader,
    IonLabel,
    IonItem,
    IonCol,
    IonRow,
    IonGrid,
    IonContent,
    IonPage,
  },
  data() {
    return {
      login: "",
      password: "",
      errors: {},
    };
  },
  methods: {
    loginUser() {
      this.axios
        .post("/login", { login: this.login, password: this.password })
        .then((_) => {
          this.axios.get("/user").then((resp) => {
            this.$store.commit("setUser", resp.data);
            this.$router.push("/home");
          });
        })
        .catch((error) => {
          if (error.response) {
            this.errors = error.response.data.errors;
          }
        });
    },
  },
};
</script>