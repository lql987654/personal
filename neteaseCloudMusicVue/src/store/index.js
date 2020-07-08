import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
import publicStatus from './modules/publicStatus'

export default new Vuex.Store({
  modules: {
    publicStatus: publicStatus,
  }

})
