<template>
  <v-main>
    <Presentation v-if="!hasData"/>
    <template v-else>
      <SearchPatient />
      <FilterPatients />
      <PatientCard v-for="patient in patients" :key="patient.id" :patient="patient"/>
    </template>
  </v-main>
</template>

<script>
import Presentation from '@/components/Presentation.vue';
import PatientCard from '@/components/Patients/PatientCard.vue';
import FilterPatients from '@/components/Patients/FilterPatients.vue';
import SearchPatient from '@/components/Patients/SearchPatient.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'Home',
  components: {
    Presentation,
    SearchPatient,
    FilterPatients,
    PatientCard,
  },
  data() {
    return {
      hasData: true,
    };
  },
  computed: {
    ...mapGetters({
      patients: 'GET_FILTERED_USERS',
    }),
  },
};
</script>

<style scoped lang="scss">
  .v-main {
    height: 100%;
    overflow-x: auto;
  }
</style>
