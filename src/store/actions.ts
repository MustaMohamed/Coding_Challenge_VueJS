import { StoreState } from "@/store/types";
import { Commit } from "vuex";
import { ActionTypes, Todo, TodoStatusCode } from "@/models";

export default {
  addTodo({ state, commit }: { state: StoreState, commit: Commit }, todo: Todo) {
    commit(ActionTypes.AddTodo, todo);
  },
  changeTodoStatus({ state, commit }: { state: StoreState, commit: Commit }, { todo, status }: { todo: Todo, status: TodoStatusCode }) {
    if (status == TodoStatusCode.Editing) {
      commit(ActionTypes.SelectTodoToEdit, { ...todo });
    }
    commit(ActionTypes.ChangeTodoStatus, { todo, status });
  },
  editTodo({ state, commit }: { state: StoreState, commit: Commit }, todo: Todo) {
    commit(ActionTypes.EditTodo, todo);
  },
}
