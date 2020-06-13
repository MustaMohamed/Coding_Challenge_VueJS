import { StoreState } from "@/store/state";
import { Commit } from "vuex";
import { ActionTypes, Todo } from "@/models";

export default {
  addTodo({ state, commit }: { state: StoreState, commit: Commit }, todo: Todo) {
    commit(ActionTypes.AddTodo, todo);
  }
}
