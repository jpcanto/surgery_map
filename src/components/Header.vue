<template>
  <v-main>
    <v-card class="mx-auto" tile elevation="0" color="secondary">
      <div class="d-flex align-center justify-space-between">
        <v-btn v-if="isBackButtonVisible" @click="goBack" icon>
          <v-icon color="#fff">mdi-arrow-left</v-icon>
        </v-btn>
        <v-card-title class="white--text">DR. {{ userName }}</v-card-title>
        <v-btn
          rounded
          x-small
          height="40"
          width="40"
          class="ml-3 mr-3"
          @click="handleUserDrawer"
        >
          <v-img :src="icon" max-width="40" height="30" contain></v-img>
        </v-btn>
      </div>
    </v-card>
  </v-main>
</template>

<script>
import { mapState } from 'vuex';
import userIcon from '@/assets/user.png';

export default {
  name: 'Header',
  data() {
    return {
      icon: userIcon,
    };
  },
  computed: {
    ...mapState({
      userName: (state) => state.user.info.name,
      drawerVisibleState: (state) => state.ui.isUserDrawerVisible,
    }),
    isBackButtonVisible() {
      return this.$route.name === 'Patient';
    },
  },
  methods: {
    handleUserDrawer() {
      this.$store.dispatch('DISPATCH_USER_DRAWER_VISIBILITY', !this.drawerVisibleState);
    },
    goBack() {
      this.$router.replace('/home');
    },
  },
};
</script>

<style scoped lang="scss">
</style>
