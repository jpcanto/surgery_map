<template>
  <v-main>
      <template v-for="navIten in navigationItens">
        <NavigationCard :clickAction="navIten.action" :icon="navIten.icon" :key="navIten.key">
          <template v-slot>
            <v-card-title v-text="navIten.text"></v-card-title>
          </template>
        </NavigationCard>
      </template>
  </v-main>
</template>

<script>
import NavigationCard from '@/components/NavigationCard.vue';
import createPatientIcon from '@/assets/create-patient.png';
import viewPatientsIcon from '@/assets/view-patients.png';

export default {
  name: 'Home',
  components: {
    NavigationCard,
  },
  data() {
    return {
      navigationItens: [
        {
          text: 'Ver pacientes',
          action: this.goToList,
          icon: viewPatientsIcon,
          key: 1,
        },
        {
          text: 'Cadastrar paciente',
          action: this.goToStore,
          icon: createPatientIcon,
          key: 2,
        },
      ],
    };
  },
  methods: {
    goToList() {
      this.$router.replace('patients-list');
    },
    goToStore() {
      this.$router.replace('patient/1');
    },
  },
};
</script>
