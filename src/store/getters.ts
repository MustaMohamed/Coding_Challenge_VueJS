import { StoreState } from "@/store/state";
import { TodoStatusCode, Todo } from "@/models";

export default {
  incompletedTodos: (state: StoreState) => {
    return state.todos.filter((todo: Todo) => todo.status == TodoStatusCode.InCompleted);
  },
  completedTodos: (state: StoreState) => {
    return state.todos.filter((todo: Todo) => todo.status == TodoStatusCode.Completed);
  },
  startedTodos: (state: StoreState) => {
    return state.todos.filter((todo: Todo) => todo.status == TodoStatusCode.Started);
  },
  pausedTodos: (state: StoreState) => {
    return state.todos.filter((todo: Todo) => todo.status == TodoStatusCode.Paused);
  },
}
