import { ActionTypes, Todo } from "@/models";
import { StoreState } from "@/store/state";

export default {
  [ActionTypes.AddTodo]: (state: StoreState, todo: Todo) => {
    const maxId = Math.max(...state.todos.map((x: Todo) => x.id));
    todo.id = maxId + 1;
    state.todos.push(todo);
    console.log(state);
  }
}
