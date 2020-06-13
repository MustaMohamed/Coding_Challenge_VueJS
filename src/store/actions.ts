import { StoreState } from "@/store/state";
import { Commit } from "vuex";
import { ActionTypes, Todo, TodoStatusCode } from "@/models";

export default {
  addTodo({ state, commit }: { state: StoreState, commit: Commit }, todo: Todo) {
    commit(ActionTypes.AddTodo, todo);
  },
  changeTodoStatus({ state, commit }: { state: StoreState, commit: Commit }, { todo, status }: { todo: Todo, status: TodoStatusCode }) {
    commit(ActionTypes.ChangeTodoStatus, { todo, status });
  },
}
