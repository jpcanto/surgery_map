<template>
  <v-card class="mx-auto" elevation="0">
    <v-img height="250" contain :src="getIcon"></v-img>

    <v-card-title class="ml-5">Paciente: João Pedro</v-card-title>

    <v-card-subtitle class="ml-5">Informações do paciente:</v-card-subtitle>

    <v-text-field
      label="João Pedro"
      append-icon="mdi-account"
      solo
      class="ml-4 mr-4"
    ></v-text-field>

    <v-text-field
      label="Não pago"
      append-icon="mdi-credit-card"
      solo
      class="ml-4 mr-4"
    ></v-text-field>

    <v-text-field
      label="12/12/2012"
      append-icon="mdi-calendar"
      solo
      class="ml-4 mr-4"
    ></v-text-field>

    <v-text-field
      label="22/12/2021"
      append-icon="mdi-cash"
      solo
      class="ml-4 mr-4"
    ></v-text-field>

    <v-card-actions class="d-flex justify-space-around align-center">
      <v-btn large color="error"> Cancelar edição </v-btn>
      <v-btn large color="secondary"> Confirmar edição </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import maleIcon from '@/assets/male.png';
import femaleIcon from '@/assets/female.png';

export default {
  name: 'Patient',
  data() {
    return {
      gender: 'male',
    };
  },
  computed: {
    getIcon() {
      return this.gender === 'male' ? maleIcon : femaleIcon;
    },
  },
};
</script>

<style scoped lang="scss">
.v-card__actions {
  background-color: $primary;
  height: 120px;
  flex-wrap: wrap;
}
</style>
