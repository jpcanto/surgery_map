<template>
  <div>
    <v-btn-toggle group v-model="btnToggle" class="mt-8">
      <div class="btn-box">
        <v-btn icon x-large elevation="5" class="mb-0 mt-0">
          <v-icon size="28">{{ creditCardIcon }}</v-icon>
        </v-btn>
        <span class="title">data</span>
      </div>
      <div class="btn-box">
        <v-btn icon x-large elevation="5" class="mb-0 mt-0">
          <v-icon size="28">{{ paymentIcon }}</v-icon>
        </v-btn>
        <span class="title">não pago</span>
      </div>
      <div class="btn-box">
        <v-btn icon x-large elevation="5" class="mb-0 mt-0">
          <v-icon size="28"> {{ alphabetIcon }} </v-icon>
        </v-btn>
        <span class="title">nome</span>
      </div>
    </v-btn-toggle>
  </div>
</template>

<script>
import {
  mdiOrderAlphabeticalAscending,
  mdiCurrencyUsd,
  mdiCalendarRange,
} from '@mdi/js';

export default {
  name: 'FilterPatients',
  data() {
    return {
      btnToggle: null,
      creditCardIcon: mdiCalendarRange,
      alphabetIcon: mdiOrderAlphabeticalAscending,
      paymentIcon: mdiCurrencyUsd,
    };
  },
  watch: {
    btnToggle(value) {
      this.$store.dispatch('DISPATCH_PATIENT_FILTER_PARAM', value);
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/styles/variables.scss";

.v-btn-toggle {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  .btn-box {
  align-items: center;
  display: flex;
  flex-direction: column;

  .v-btn {
  border-radius: 15px !important;
    &.v-btn--active {
      background-color: $secondary !important;
      color: $primary !important;
    }
  }
  .title {
    color: $gray;
    font-size: .8rem !important;
  }
}
}

</style>
