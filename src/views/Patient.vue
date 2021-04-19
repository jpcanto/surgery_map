<template>
  <v-card class="mx-auto my-12" elevation="0">
    <v-img
      height="250"
      contain
      :src="getIcon"
    ></v-img>

    <v-card-title>Paciente: João Pedro</v-card-title>

    <v-card-title>Informações do paciente</v-card-title>

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
