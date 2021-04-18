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
          name: 'Joao Pedro', id: 1, surgery: 'Bariatrica', date: '12/05/2020', gender: 'male', paid: false,
        },
        {
          name: 'Dilson Canto', id: 2, surgery: 'PNEUMOTORAX ABERTO com a equipe da sol, no hospital norte cor', date: '12/08/2020', gender: 'male', paid: true,
        },
        {
          name: 'Solange Canto', id: 3, surgery: 'Valvuloplastia', date: '12/02/2021', gender: 'female', paid: false,
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
