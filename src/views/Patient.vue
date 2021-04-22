<template>
  <v-card elevation="0" tile>
    <div class="image-box pt-5 pb-5 mb-12">
      <v-img height="250" contain :src="getIcon"></v-img>
    </div>

    <v-card-title class="ml-5">Paciente: João Pedro</v-card-title>

    <v-card-subtitle class="ml-5">Informações do paciente:</v-card-subtitle>

    <v-text-field
      label="Nome do paciente"
      append-icon="mdi-account"
      v-model="patient.name"
      outlined
      color="secondary"
      class="ml-4 mr-4"
    ></v-text-field>

    <v-text-field
      label="CPF"
      v-model="patient.cpf"
      v-mask="'###-###-###-##'"
      append-icon="mdi-account-box"
      outlined
      color="secondary"
      class="ml-4 mr-4"
    ></v-text-field>

    <v-text-field
      label="Idade"
      v-model="patient.age"
      v-mask="'###'"
      append-icon="mdi-account-box"
      outlined
      color="secondary"
      class="ml-4 mr-4"
    ></v-text-field>

    <v-text-field
      label="Telefone"
      v-model="patient.phoneNumber"
      v-mask="'(##) #####-####'"
      append-icon="mdi-cellphone"
      outlined
      color="secondary"
      class="ml-4 mr-4"
    ></v-text-field>

    <v-text-field
      label="Email"
      v-model="patient.email"
      append-icon="mdi-email"
      outlined
      color="secondary"
      class="ml-4 mr-4"
    ></v-text-field>

    <v-text-field
      label="Hospital"
      v-model="patient.hospital"
      :append-icon="hospitalIcon"
      outlined
      color="secondary"
      class="ml-4 mr-4"
    ></v-text-field>

    <v-switch
      class="ml-4 mt-0"
      color="secondary"
      width="115"
      v-model="patient.paid"
      :label="paidLabel"
    ></v-switch>

    <DatePicker
      classes="ml-4 mr-4"
      v-model="patient.procedureDate"
      label="Data da cirurgia"
      :initialValue="patient.procedureDate"
    />
    <DatePicker
      classes="ml-4 mr-4"
      v-model="patient.payDate"
      label="Data de recebimento"
      :initialValue="patient.payDate"
    />

    <v-textarea
      outlined
      color="secondary"
      name="obs"
      label="Observações"
      class="ml-4 mr-4"
      v-model="patient.obs"
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
      showDatePicker: false,
      hospitalIcon: mdiHospitalBox,
      patient: {
        name: 'João Pedro',
        cpf: '44444444444',
        age: '26',
        phoneNumber: '21986738406',
        email: 'joao.canto@gmail.com',
        hospital: 'Norte cor',
        paid: false,
        procedureDate: '2021-02-22',
        payDate: '2021-05-22',
        obs: 'Cirurgia bariátrica realizada no hospital norte cor com a eequipe da sol',
      },
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
