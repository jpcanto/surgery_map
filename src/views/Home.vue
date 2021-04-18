<template>
  <v-main>
    <Presentation v-if="!hasData"/>
    <PatientCard v-else v-for="patient in patients" :key="patient.id" :patient="patient"/>
  </v-main>
</template>

<script>
import Presentation from '@/components/Presentation.vue';
import PatientCard from '@/components/Patients/PatientCard.vue';

export default {
  name: 'Home',
  components: {
    Presentation,
    PatientCard,
  },
  data() {
    return {
      hasData: true,
      patients: [
        {
          name: 'Joao Pedro', id: 1, surgery: 'Bariatrica', date: '12/05/2020', gender: 'male',
        },
        {
          name: 'Dilson Canto', id: 2, surgery: 'Pneumotorax', date: '12/08/2020', gender: 'male',
        },
        {
          name: 'Solange Canto', id: 3, surgery: 'Valvuloplastia', date: '12/02/2021', gender: 'female',
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
  .v-main {
    height: 100%;
    overflow-x: auto;
  }
</style>
