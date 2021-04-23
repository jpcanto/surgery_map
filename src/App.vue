<template>
  <v-app>
    <v-main class="primary">
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
    showHeader() {
      return this.$route.name !== 'Login';
    },
  },
  created() {
    const authUser = firebase.auth().currentUser;
    if (authUser) {
      this.$store.dispatch('DISPATCH_USER_NAME', { name: authUser.displayName, id: authUser.uid });
    }
  },
};
</script>
