<template>
  <v-menu
    ref="menu"
    v-model="menu"
    :close-on-content-click="false"
    transition="scale-transition"
    offset-y
    min-width="auto"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
      :class="classes"
        v-model="date"
        :label="label"
        append-icon="mdi-calendar"
        outlined
        color="secondary"
        readonly
        v-bind="attrs"
        v-on="on"
      ></v-text-field>
    </template>
    <v-date-picker
      ref="picker"
      color="secondary"
      v-model="date"
      :max="new Date().toISOString().substr(0, 10)"
      min="1950-01-01"
      @change="save"
    ></v-date-picker>
  </v-menu>
</template>

<script>
export default {
  name: 'DatePicker',
  props: ['classes', 'label', 'initialValue'],
  data() {
    return {
      date: this.initialValue,
      menu: false,
    };
  },
  watch: {
    menu(value) {
      return value && setTimeout(() => {
        this.$refs.picker.activePicker = 'YEAR';
      });
    },
    date(value) {
      switch (this.label) {
        case 'Data da cirurgia':
          this.$store.dispatch('DISPATCH_PATIENT_PROCEDURE_DATE', value);
          break;

        case 'Data de recebimento':
          this.$store.dispatch('DISPATCH_PATIENT_PAY_DATE', value);
          break;

        default:
          break;
      }
    },
  },
  methods: {
    save(date) {
      this.$refs.menu.save(date);
    },
  },
};
</script>
