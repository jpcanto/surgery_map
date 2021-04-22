import Vue from 'vue';
import VueRouter from 'vue-router';
import firebase from 'firebase';
import Patient from '@/views/Patient.vue';
import Home from '@/views/Home.vue';
import PatientsList from '@/views/PatientsList.vue';
import Login from '@/views/Login.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '*',
    redirect: '/login',
  },
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      authRequired: true,
    },
  },
  {
    path: '/patients-list',
    name: 'PatientsList',
    component: PatientsList,
    meta: {
      authRequired: true,
    },
  },
  {
    path: '/patient/:id',
    name: 'Patient',
    component: Patient,
    meta: {
      authRequired: true,
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const { currentUser } = firebase.auth();
  const authRequired = to.matched.some((record) => record.meta.authRequired);

  if (authRequired && !currentUser) {
    next('login');
  } else if (!authRequired && currentUser) {
    next('home');
  } else {
    next();
  }
});

export default router;
