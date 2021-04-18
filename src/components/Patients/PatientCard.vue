<template>
  <v-card
    class="mt-8 mb-8 mr-2 ml-2 d-flex align-center justify-center"
    color="transparent"
    elevation="0"
    max-width="500"
    :rounded="false"
  >
    <v-img
      :src="getIcon(patient.gender)"
      width="200"
      height="250"
      contain
      :class="genderClass"
    ></v-img>

    <div class="info-box elevation-4">
      <v-card-title> {{ patient.name }} </v-card-title>

      <v-card-subtitle>
        {{ patient.surgery }}
      </v-card-subtitle>

      <v-card-subtitle class="pt-0">
        Data da cirurgia: {{ patient.date }}
      </v-card-subtitle>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-card-actions>
    </div>
  </v-card>
</template>

<script>
import maleIcon from '@/assets/male.png';
import femaleIcon from '@/assets/female.png';

export default {
  name: 'PatientCard',
  props: ['patient'],
  computed: {
    genderClass() {
      let defaultClass = 'elevation-4';
      defaultClass += this.patient.gender === 'male' ? ' male' : ' female';
      return defaultClass;
    },
  },
  methods: {
    getIcon(gender) {
      return gender === 'male' ? maleIcon : femaleIcon;
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/styles/variables.scss";

.v-card {
  ::v-deep .v-image {
    border-radius: 5px;
    &.male {
      background-color: $background-male-color;
    }
    &.female {
      background-color: $background-female-color;
    }
    &.v-image__image--contain {
      background-size: 140px;
    }
  }
  .info-box {
    background-color: #fff;
    border-top-right-radius: 5px;
    border-bottom-left-radius: 0;
  }
}
</style>
