<template>
  <v-app>
    <v-main :class="mainBackground">
      <template v-if="showHeader">
        <Header />
      </template>
      <router-view></router-view>
      <UserDrawer/>
      <Snackbar />
    </v-main>
  </v-app>
</template>

<script>
import UserDrawer from '@/components/Users/UserDrawer.vue';
import { mapState } from 'vuex';
import firebase from 'firebase';
import Header from './components/Header.vue';
import Snackbar from './components/Snackbar.vue';

export default {
  name: 'App',
  components: {
    Header,
    Snackbar,
    UserDrawer,
  },
  computed: {
    ...mapState({
      isDrawerVisible: (state) => state.ui.isUserDrawerVisible,
    }),
    mainBackground() {
      const route = this.$route.name;
      switch (route) {
        case 'Login':
          return 'main-login';
        default:
          return 'primary';
      }
    },
    showHeader() {
      return this.$route.name !== 'Login';
    },
  },
  created() {
    const authUser = firebase.auth().currentUser;
    if (authUser) {
      this.$store.dispatch('DISPATCH_USER_NAME', authUser.displayName);
    }
  },
};
</script>

<style scoped lang="scss">
  .main-login {
    background-image: url('./assets/login-background.jpg');
    background-size: cover;
  }
</style>
