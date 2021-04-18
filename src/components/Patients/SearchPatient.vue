<template>
  <v-toolbar
      dense
      class="ml-6 mr-6"
    >
      <v-text-field
        hide-details
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
};
</script>

<style scoped lang="scss">
  .v-toolbar {
    border-radius: 15px !important;
  }
</style>
