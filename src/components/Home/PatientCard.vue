<template>
  <v-card
    class="ma-8 d-flex align-center justify-center"
    color="transparent"
    elevation="0"
    max-width="500"
    max-height="250"
    :rounded="false"
  >
    <v-img
      :src="getIcon(patient.gender)"
      width="130"
      height="180"
      contain
      :class="genderClass"
      @click="clickAction"
    ></v-img>

    <div class="info-box elevation-4 d-flex flex-column justify-space-between">
      <div>
        <v-card-title class="pt-2 pb-3"> {{ patient.name }} </v-card-title>

        <v-card-subtitle class="pb-0">
          {{ surgeryDescription }}
        </v-card-subtitle>

        <v-card-subtitle class="pb-0 pt-0">
          Situação:
          <span :class="paymentSituation === 'PAGO' ? 'paid' : 'unpaid'">
            {{ paymentSituation }}
          </span>
        </v-card-subtitle>

        <v-card-subtitle class="pt-0 pb-0">
          Data da cirurgia: {{ patient.date }}
        </v-card-subtitle>
      </div>

      <v-card-actions bottom class="pa-0">
        <v-spacer></v-spacer>

        <v-btn-toggle v-show="activeButtons" group>
          <v-btn icon small class="mb-0 mt-0">
            <v-icon small>mdi-credit-card</v-icon>
          </v-btn>
          <v-btn icon small class="mb-0 mt-0">
            <v-icon small>mdi-pencil</v-icon>
          </v-btn>
        </v-btn-toggle>
        <v-btn icon small @click="handleButtonsVisibility">
          <v-icon small>mdi-dots-vertical</v-icon>
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
  props: ['patient', 'clickAction'],
  data() {
    return {
      activeButtons: false,
    };
  },
  computed: {
    genderClass() {
      let defaultClass = 'elevation-4';
      defaultClass += this.patient.gender === 'male' ? ' male' : ' female';
      return defaultClass;
    },
    surgeryDescription() {
      return `${this.patient.surgery.slice(0, 20)}...`;
    },
    paymentSituation() {
      return this.patient.paid
        ? 'PAGO'
        : 'NÃO PAGO';
    },
  },
  methods: {
    handleButtonsVisibility() {
      this.activeButtons = !this.activeButtons;
    },
    getIcon(gender) {
      return gender === 'male' ? maleIcon : femaleIcon;
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/styles/variables.scss";

.v-card {
  @media screen and(max-width: 350px) {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
  ::v-deep .v-image {
    border-radius: 5px;
    &.male {
      background-color: $background-male-color;
    }
    &.female {
      background-color: $background-female-color;
    }
    &.v-image__image--contain {
      background-size: 120px;
    }
  }
  .info-box {
    background-color: #fff;
    border-top-right-radius: 5px;
    border-bottom-left-radius: 0;
    height: 140px;

    .v-card__title {
      font-size: 0.85rem;
    }
    .v-card__subtitle {
      font-size: 0.7rem;
    }
    .paid {
      color: green;
    }
    .unpaid {
      color: red;
    }
  }
}
</style>
