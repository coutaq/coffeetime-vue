<template>
  <ion-page>
    <ion-content>
      <div class="center-y">
        <div class="text-y">
          <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
            <image href="../assets/logo.png" height="64" width="64" />
          </svg>
        </div>
        <h4 class="text-y text-heavy">Добро пожаловать.</h4>
        <h4 class="text-y">Находите новых друзей</h4>
        <h4 class="text-y">с <b class="text-primary">coffeetime</b>.</h4>
        <div class="space-top">
          <ion-button
            class="btn-uppercase"
            expand="block"
            color="primary"
            router-link="/login"
            >ВОЙТИ</ion-button
          >
        </div>
        <div class="space-top">
          <ion-button
            class="btn-uppercase"
            expand="block"
            color="primary"
            router-link="/login"
            >ЗАРЕГЕСТРИРОВАТЬСЯ</ion-button
          >
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonButton, IonPage, IonContent } from "@ionic/vue";
export default {
  components: {
    IonButton,
    IonPage,
    IonContent,
  },
};
</script>
