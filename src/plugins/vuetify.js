import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: '#f8f8f8',
        secondary: '#74bde0',
        error: '#ec1c24',
        gray: '#a9a9a9',
      },
      dark: {
        primary: '#f8f8f8',
        secondary: '#74bde0',
        error: '#ec1c24',
        gray: '#a9a9a9',
      },
    },
  },
});
