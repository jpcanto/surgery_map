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
        primary: '#f6f6f6',
        secondary: '#306060',
        tertiary: '#74bde0',
        error: '#ec1c24',
        gray: '#a9a9a9',
      },
      dark: {
        primary: '#f6f6f6',
        secondary: '#406b6a',
        tertiary: '#74bde0',
        error: '#ec1c24',
        gray: '#a9a9a9',
      },
    },
  },
});
