<template>
  <v-navigation-drawer v-model="isVisible" absolute color="secondary">
    <v-list nav dense>
      <v-list-item-group v-model="group" active-class="white">
        <v-list-item>
          <v-list-item-icon>
            <v-icon color="#fff">mdi-pencil</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="white--text">Editar usuário</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-icon>
            <v-icon color="#fff">{{ logoutIcon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="white--text">Logout</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapState } from 'vuex';
import { mdiLogout } from '@mdi/js';

export default {
  name: 'UserDrawer',
  data() {
    return {
      group: null,
      logoutIcon: mdiLogout,
    };
  },
  computed: {
    ...mapState({
      drawerVisibleState: (state) => state.ui.isUserDrawerVisible,
    }),
    isVisible: {
      get() {
        return this.drawerVisibleState;
      },
      set(value) {
        this.$store.dispatch('DISPATCH_USER_DRAWER_VISIBILITY', value);
      },
    },
  },
};
</script>

<style>
</style>
