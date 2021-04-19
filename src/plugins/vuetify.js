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
        primary: '#f9f9f9',
        primaryLighten: '#f6f6f6',
        primaryDarken: '#e6e6e6',
        secondary: '#74bde0',
        error: '#f16868',
        gray: '#a9a9a9',
      },
      dark: {
        primary: '#f9f9f9',
        primaryLighten: '#f6f6f6',
        primaryDarken: '#e6e6e6',
        secondary: '#74bde0',
        error: '#f16868',
        gray: '#a9a9a9',
      },
    },
  },
});
