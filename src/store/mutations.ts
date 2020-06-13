import { ActionTypes, Todo, TodoStatusCode } from "@/models";
import { StoreState } from "@/store/state";

export default {
  [ActionTypes.AddTodo]: (state: StoreState, todo: Todo) => {
    const maxId = Math.max(...state.todos.map((x: Todo) => x.id));
    todo.id = maxId + 1;
    state.todos.push(todo);
    console.log(state);
  },
  [ActionTypes.ChangeTodoStatus]: (state: StoreState, { todo, status }: { todo: Todo, status: TodoStatusCode }) => {
    // pause all running tasks
    if (status == TodoStatusCode.Started) {
      let idx = state.todos.findIndex((f: Todo) => f.status == TodoStatusCode.Started);
      if (idx != -1) {
        state.todos[idx].status = TodoStatusCode.Paused;
      }
    }

    let idx = state.todos.findIndex((f: Todo) => f.id == todo.id);
    if (idx != -1) {
      state.todos[idx].status = status;
    }
    console.log(state);
  },
}
