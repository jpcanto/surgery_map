<template>
  <v-app>
    <v-main :class="mainBackgroundColor">
      <router-view></router-view>
      <Snackbar />
    </v-main>
  </v-app>
</template>

<script>
import Snackbar from './components/Snackbar.vue';

export default {
  name: 'App',
  components: {
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
