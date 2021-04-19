<template>
  <v-card elevation="0" tile>
    <div class="image-box pt-5 pb-5 mb-12">
      <v-img height="250" contain :src="getIcon"></v-img>
    </div>

    <v-card-title class="ml-5">Paciente: João Pedro</v-card-title>

    <v-card-subtitle class="ml-5">Informações do paciente:</v-card-subtitle>

    <v-text-field
      label="Nome do paciente"
      value="João Pedro"
      append-icon="mdi-account"
      outlined
      color="secondary"
      class="ml-4 mr-4"
    ></v-text-field>

    <v-text-field
      label="Hospital"
      value="Norte cor"
      :append-icon="hospitalIcon"
      outlined
      color="secondary"
      class="ml-4 mr-4"
    ></v-text-field>

    <v-switch
      class="ml-4 mt-0"
      color="secondary"
      v-model="paid"
      :label="paidLabel"
    ></v-switch>

    <DatePicker
      classes="ml-4 mr-4"
      label="Data da cirurgia"
      initialValue="22-02-2021"
    />
    <DatePicker
      classes="ml-4 mr-4"
      label="Data de recebimento"
      initialValue="28-05-2021"
    />

    <v-textarea
      outlined
      color="secondary"
      name="obs"
      label="Observações"
      class="ml-4 mr-4"
      value="Cirúrgia bariátrica, realizada no hospital norte cor. Com a equipe da sol."
    ></v-textarea>

    <v-card-actions class="d-flex justify-space-around align-center">
      <v-btn large color="error"> Cancelar edição </v-btn>
      <v-btn large color="secondary"> Confirmar edição </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import maleIcon from '@/assets/male.png';
import femaleIcon from '@/assets/female.png';
import { mdiHospitalBox } from '@mdi/js';
import DatePicker from '@/components/DatePicker.vue';

export default {
  name: 'Patient',
  components: {
    DatePicker,
  },
  data() {
    return {
      gender: 'male',
      paid: false,
      showDatePicker: false,
      hospitalIcon: mdiHospitalBox,
    };
  },
  computed: {
    getIcon() {
      return this.gender === 'male' ? maleIcon : femaleIcon;
    },
    paidLabel() {
      return this.paid ? 'Pago' : 'Não pago';
    },
  },
};
</script>

<style scoped lang="scss">
.v-card__actions {
  background-color: $primary;
  flex-wrap: wrap;
  height: 120px;
}
.image-box {
  background-color: $secondary;
  .v-image {
    background-color: $primary;
    border-radius: 15px;
    bottom: -50px;
    height: 250px;
    margin: auto;
    width: 80%;
  }
}
</style>
