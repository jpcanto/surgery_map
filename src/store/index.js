import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/userModule';
import ui from './modules/uiModule';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    ui,
  },
});
