<template>
  <v-card class="ma-8" elevation="0">
    <v-img
      @click="clickAction"
      :src="icon"
      contain
      class="white--text align-end"
      :gradient="`to bottom,
              ${this.$vuetify.theme.themes.light.secondaryDarkenOpacity},
              ${this.$vuetify.theme.themes.light.secondary}`"
      height="200px"
    >
      <slot></slot>
    </v-img>
  </v-card>
</template>

<script>
export default {
  name: 'NavigationCard',
  props: ['clickAction', 'icon'],
};
</script>

<style>
</style>
