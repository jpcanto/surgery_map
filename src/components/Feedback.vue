<template>
  <v-card
    class="ma-8 d-flex flex-column align-center justify-center"
    color="transparent"
    elevation="0"
  >
    <v-img
      :src="getIcon"
      width="130"
      height="180"
      contain
    ></v-img>

        <v-card-title class="pt-2 pb-3"> {{ feedbackTitle }} </v-card-title>

        <v-card-subtitle class="pb-0">
          {{ feedbackDescription }}
        </v-card-subtitle>

      <v-card-actions>
        <v-btn @click="feedbackAction" :color="actionColor">{{ feedbackActionTitle }}</v-btn>
      </v-card-actions>
  </v-card>
</template>

<script>
import sadIcon from '@/assets/sad-doctor.png';

export default {
  name: 'Feedback',
  props: ['feedbackTitle', 'feedbackDescription', 'feedbackAction', 'feedbackActionTitle', 'actionColor'],
  data() {
    return {
      getIcon: sadIcon,
    };
  },
};
</script>

<style scoped lang="scss">
  .v-btn {
    color: #fff;
  }
</style>
