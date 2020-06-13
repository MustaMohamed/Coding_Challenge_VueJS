import { StoreState } from "@/store/types";
import { TodoStatusCode, Todo } from "@/models";

export default {
  incompletedTodos: (state: StoreState) => {
    return state.todoes.filter((todo: Todo) => todo.status == TodoStatusCode.InCompleted);
  },
  completedTodos: (state: StoreState) => {
    return state.todoes.filter((todo: Todo) => todo.status == TodoStatusCode.Completed);
  },
  startedTodos: (state: StoreState) => {
    return state.todoes.filter((todo: Todo) => todo.status == TodoStatusCode.Started);
  },
  pausedTodos: (state: StoreState) => {
    return state.todoes.filter((todo: Todo) => todo.status == TodoStatusCode.Paused);
  },
  selectedTodoToEdit: (state: StoreState) => {
    return state.todoes.filter((todo: Todo) => todo.status == TodoStatusCode.Editing);
  },
}
