<template>
  <div class="text-center">
    <v-snackbar v-model="isVisible" :timeout="timeout">
      {{ text }}
      <template v-slot:action="{ attrs }">
        <v-btn :color="color" text v-bind="attrs" @click.prevent="updateSanckbarVisibility(false)">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      show: ({ ui }) => ui.snackbar.isVisible,
      timeout: ({ ui }) => ui.snackbar.timeout,
      text: ({ ui }) => ui.snackbar.text,
      color: ({ ui }) => ui.snackbar.color,
    }),
    isVisible: {
      get() {
        return this.show;
      },
      set(value) {
        return this.updateSanckbarVisibility(value);
      },
    },
  },
  methods: {
    updateSanckbarVisibility(value) {
      this.$store.dispatch('DISPATCH_SNACKBAR_VISIBILITY', value);
    },
  },
};
</script>
