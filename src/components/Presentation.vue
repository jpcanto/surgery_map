<template>
  <v-main>
    <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      height="200px"
      src="@/assets/user.png"
    >
    </v-img>

    <v-card-text class="white--text">
      <div>Bem vindo</div>

      <div>Estamos preparando tudo para você</div>
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
.v-card {
  background-color: transparent !important;
  box-shadow: none !important;
  margin-top: 20vh;

  .v-card__text {
    text-align: center;
  }
}
::v-deep .v-progress-circular {
  left: 45vw;
}
::v-deep .v-image__image--cover {
  background-size: contain;
}
</style>
