<template>
  <v-main>
    <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      height="250px"
      src="@/assets/medical-team.png"
    >
    </v-img>

    <v-card-text class="white--text">
      <div>Estamos preparando tudo para você, por favor aguarde.</div>
    </v-card-text>
  </v-card>
  <v-progress-circular
      indeterminate
      color="primary"
    ></v-progress-circular>
  </v-main>
</template>

<script>

export default {
  name: 'Presentation',
};
</script>

<style scoped lang="scss">
.v-main {
  background-color: $secondary;
  bottom: 0;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 9;
  .v-card {
  background-color: transparent !important;
  box-shadow: none !important;
  margin-top: 20vh;

  .v-card__text {
    text-align: center;
  }
}
}
::v-deep .v-progress-circular {
  left: 45vw;
}
::v-deep .v-image__image--cover {
  background-size: contain;
}
</style>
