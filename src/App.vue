<template>
  <v-app>
    <v-main :class="mainBackgroundColor">
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
    mainBackgroundColor() {
      const route = this.$route.name;
      switch (route) {
        case 'login':
          return 'secondary';
        default:
          return 'primary';
      }
    },
  },
};
</script>
