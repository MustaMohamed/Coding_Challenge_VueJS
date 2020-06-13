import Vue from 'vue'
import Vuex, { Commit } from 'vuex'
import { ActionTypes, Todo } from '@/models'
import { state } from './state';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';
import { StoreState } from './types';

Vue.use(Vuex)

const todoes = {
  state,
  getters,
  mutations,
  actions
}
export default new Vuex.Store({
  modules: {
    todos: { ...todoes }
  }
})
