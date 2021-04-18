<template>
  <v-app>
    <v-main :class="mainBackground">
      <!-- <Navbar /> -->
      <router-view></router-view>
      <Snackbar />
    </v-main>
  </v-app>
</template>

<script>
// import Navbar from './components/Navbar.vue';
import Snackbar from './components/Snackbar.vue';

export default {
  name: 'App',
  components: {
    // Navbar,
    Snackbar,
  },
  computed: {
    mainBackground() {
      const route = this.$route.name;
      switch (route) {
        case 'login':
          return 'main-login';
        default:
          return 'primary';
      }
    },
  },
};
</script>

<style scoped lang="scss">
  .main-login {
    background-image: url('./assets/login-background.jpg');
    background-size: cover;
  }
</style>
