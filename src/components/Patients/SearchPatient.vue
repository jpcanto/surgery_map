<template>
  <v-toolbar
      dense
      class="ml-6 mr-6"
      elevation="1"
    >
      <v-text-field
        hide-details
        label="Buscar por nome"
        prepend-icon="mdi-magnify"
        solo
        flat
        v-model="search"
      ></v-text-field>
    </v-toolbar>
</template>

<script>
export default {
  name: 'SearchPatient',
  data() {
    return {
      search: '',
    };
  },
  watch: {
    search(value) {
      this.$store.dispatch('DISPATCH_PATIENT_SEARCH_PARAM', value);
    },
  },
};
</script>

<style scoped lang="scss">
  .v-toolbar {
    border-radius: 15px !important;
  }
</style>
