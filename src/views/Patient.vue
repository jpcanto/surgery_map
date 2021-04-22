<template>
  <v-card elevation="0" tile>
    <div class="image-box pt-5 pb-5 mb-12">
      <v-img height="250" contain :src="getIcon"></v-img>
    </div>

    <v-card-title class="ml-5">Paciente: {{ patient.name }}</v-card-title>

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

    <v-radio-group v-model="patient.gender">
      <v-radio
        color="secondary"
        class="ml-4 mr-4 mb-4"
        v-for="genderOption in genderOptions"
        :key="genderOption.label"
        :label="genderOption.label"
        :value="genderOption.value"
      ></v-radio>
    </v-radio-group>

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
      label="Procedimento"
      v-model="patient.surgery"
      append-icon="mdi-account-box"
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
      <v-btn large color="error" @click="handleCancelAction"> {{ cancelActionLabel }} </v-btn>
      <v-btn large color="secondary" @click="handleConfirmAction">
        {{ confirmActionLabel }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import maleIcon from '@/assets/male.png';
import femaleIcon from '@/assets/female.png';
import { mdiHospitalBox } from '@mdi/js';
import { storePatient, updatePatient } from '@/services/patients';
import DatePicker from '@/components/DatePicker.vue';
import { mapState } from 'vuex';

export default {
  name: 'Patient',
  components: {
    DatePicker,
  },
  data() {
    return {
      genderOptions: [{ label: 'Masculino', value: 'male' }, { label: 'Feminino', value: 'female' }],
      showDatePicker: false,
      hospitalIcon: mdiHospitalBox,
      patient: {
        name: '',
        cpf: '',
        age: '',
        gender: '',
        phoneNumber: '',
        email: '',
        surgery: '',
        hospital: '',
        paid: false,
        procedureDate: '',
        payDate: '',
        obs: '',
      },
    };
  },
  computed: {
    ...mapState({
      patientReadyToEdit: (state) => state.patients.patient,
    }),
    isNewUser() {
      return this.$route.params.id === '1';
    },
    getIcon() {
      return this.gender === 'male' ? maleIcon : femaleIcon;
    },
    cancelActionLabel() {
      return this.isNewUser ? 'Cancelar cadastro' : 'Cancelar edição';
    },
    confirmActionLabel() {
      return this.isNewUser ? 'Confirmar cadastro' : 'Confirmar edição';
    },
    paidLabel() {
      return this.patient.paid ? 'Pago' : 'Não pago';
    },
    gender() {
      return this.patient.gender;
    },
  },
  created() {
    if (!this.isNewUser) {
      this.patient = this.patientReadyToEdit;
    }
  },
  methods: {
    async handleConfirmAction() {
      console.log(this.patient);
      const txt = this.isNewUser
        ? await storePatient(this.patient)
        : await updatePatient(this.patient);

      this.$router.replace('/patients-list');
      this.$store.dispatch('DISPATCH_SNACKBAR_INFO', {
        text: txt,
        isVisible: true,
        color: this.$vuetify.theme.themes.light.secondary,
      });
    },
    handleCancelAction() {
      this.$router.replace('/patients-list');
      this.$store.dispatch('DISPATCH_SNACKBAR_INFO', {
        text: 'Operação cancelada',
        isVisible: true,
        color: this.$vuetify.theme.themes.light.secondary,
      });
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
