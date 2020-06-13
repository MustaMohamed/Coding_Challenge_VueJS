import { ActionTypes, Todo, TodoStatusCode } from "@/models";
import { StoreState } from "@/store/types";

export default {
  [ActionTypes.AddTodo]: (state: StoreState, todo: Todo) => {
    const maxId = Math.max(...state.todoes.map((x: Todo) => x.id));
    todo.id = maxId + 1;
    state.todoes.push(todo);
  },
  [ActionTypes.ChangeTodoStatus]: (state: StoreState, { todo, status }: { todo: Todo, status: TodoStatusCode }) => {
    // pause all running tasks
    if (status == TodoStatusCode.Started) {
      let idx = state.todoes.findIndex((f: Todo) => f.status == TodoStatusCode.Started);
      if (idx != -1) {
        state.todoes[idx].status = TodoStatusCode.Paused;
      }
    }
    let idx = state.todoes.findIndex((f: Todo) => f.id == todo.id);
    if (idx != -1) {
      state.todoes[idx].status = status;
    }
  },
  [ActionTypes.SelectTodoToEdit]: (state: StoreState, todo: Todo) => {
    state.seletedTodoToEdit = todo;
  },
  [ActionTypes.EditTodo]: (state: StoreState, todo: Todo) => {
    let idx = state.todoes.findIndex((f: Todo) => f.id == todo.id);
    if (idx != -1) {
      let status = TodoStatusCode.InCompleted;
      if (state.seletedTodoToEdit)
        status = state.seletedTodoToEdit.status;
      todo.status = status;
      state.todoes[idx] = todo;
      state.seletedTodoToEdit = undefined;
    }
  }
}
