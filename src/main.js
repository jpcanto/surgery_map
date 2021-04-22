import Vue from 'vue';
import firebase from 'firebase';
import firebaseConfig from '@/config/firebase'; //eslint-disable-line
import { VueMaskDirective } from 'v-mask';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;
Vue.directive('mask', VueMaskDirective);

let app = '';

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      vuetify,
      render: (h) => h(App),
    }).$mount('#app');
  }
});
