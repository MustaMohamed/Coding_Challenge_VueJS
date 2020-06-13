import Vue from 'vue'
import Vuex, { Commit } from 'vuex'
import { ActionTypes, Todo } from '@/models'
import { state, StoreState } from './state';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex)

const todos = {
  state,
  getters,
  mutations,
  actions
}
export default new Vuex.Store({
  modules: {
    todos: {...todos}
  }
})
