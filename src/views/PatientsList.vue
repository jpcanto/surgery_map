<template>
  <v-main class="mt-8">
    <template>
      <SearchPatient />
      <FilterPatients />
      <template v-if="!patientsError && patients.length && !loading">
        <p class="number-label mt-4 pl-3 pr-3 text-center">
          {{ patientsNumberLabel }}
        </p>
        <PatientCard
          v-for="patient in patients"
          :key="patient.name"
          :patient="patient"
          :clickAction="goToPatient"
        />
      </template>
      <template v-if="patientsError && !patients.lenth && !loading">
        <Feedback
          feedbackTitle="Houston, we have a problem!"
          feedbackDescription="Desculpe, Não foi possível carregar os pacientes,
        tente limpar os filtros, ou recarregar a página"
          feedbackActionTitle="Recarregar"
          :actionColor="this.$vuetify.theme.themes.light.secondary"
          :feedbackAction="reload"
        />
      </template>
      <template v-else-if="loading">
        <Presentation />
      </template>
    </template>
  </v-main>
</template>

<script>
import Presentation from '@/components/Presentation.vue';
import Feedback from '@/components/Feedback.vue';
import PatientCard from '@/components/Patients/PatientCard.vue';
import FilterPatients from '@/components/Patients/FilterPatients.vue';
import SearchPatient from '@/components/Patients/SearchPatient.vue';
import { mapGetters, mapState } from 'vuex';

export default {
  name: 'PatientsList',
  components: {
    Presentation,
    Feedback,
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
      patients: 'GET_FILTERED_PATIENTS',
      patientsNumber: 'GET_PATIENTS_NUMBER',
      patientsFilteredNumber: 'GET_PATIENTS_FILTERED_NUMBER',
    }),
    ...mapState({
      loading: (state) => state.patients.loading,
      patientsError: (state) => state.patients.error,
    }),
    patientsNumberLabel() {
      return `Você tem ${this.patientsNumber} pacientes cadastrados, e está vendo ${this.patientsFilteredNumber} pacientes`;
    },
  },
  methods: {
    reload() {
      this.$router.go('/home');
    },
    goToPatient() {
      this.$router.replace('/patient/2');
    },
  },
  created() {
    this.$store.dispatch(
      'DISPATCH_PATIENTS_LIST',
      this.$store.state.user.info.id,
    );
  },
};
</script>

<style scoped lang="scss">
.number-label {
  color: $gray;

  border-bottom: 2px solid #a9a9a930;
  padding-bottom: 8px;
}
</style>
