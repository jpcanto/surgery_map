import Vue from 'vue';
import firebase from 'firebase';
// import firebaseConfig from '@/config/firebase';
import { VueMaskDirective } from 'v-mask';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;
Vue.directive('mask', VueMaskDirective);

const firebaseConfig = {
  apiKey: 'AIzaSyCAv40mGVV2edCI5QpfBPGWCVGuOH8RQnw',
  authDomain: 'surgery-map-h.firebaseapp.com',
  databaseURL: 'https://surgery-map-h-default-rtdb.firebaseio.com',
  projectId: 'surgery-map-h',
  storageBucket: 'surgery-map-h.appspot.com',
  messagingSenderId: '437043821400',
  appId: '1:437043821400:web:a93206dbe284122cf3c32d',
};

firebase.initializeApp(firebaseConfig);

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
