<template>
  <v-main>
    <Presentation v-if="loading"/>
    <template v-else>
      <SearchPatient />
      <FilterPatients />
      <template v-if="patients.length && !loading">
        <PatientCard v-for="patient in patients" :key="patient.id" :patient="patient"/>
      </template>
      <template v-else>
      <Feedback
        feedbackTitle="Houston, we have a problem!"
        feedbackDescription="Desculpe, Não foi possível carregar os pacientes,
        tente limpar os filtros, ou recarregar a página"
        feedbackActionTitle="Recarregar"
        :actionColor="this.$vuetify.theme.themes.light.secondary"
        :feedbackAction="reload"
      />
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
  name: 'Home',
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
    }),
    ...mapState({
      loading: (state) => state.patients.loading,
    }),
  },
  methods: {
    reload() {
      this.$router.go('/home');
    },
  },
};
</script>

<style scoped lang="scss">
</style>
