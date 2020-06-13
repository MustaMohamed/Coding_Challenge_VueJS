import { ActionTypes, Todo, TodoStatusCode } from "@/models";

export interface StoreState {
  todoes: Todo[];
  seletedTodoToEdit?: Todo;
}

// Getters
// key: getter name
// value: return type of getter
export interface StoreGetters {
  incompletedTodos: Todo[],
  completedTodos: Todo[],
  startedTodos: Todo[],
  pausedTodos: Todo[],
  selectedTodoToEdit: Todo[],
}

// Mutations
// key: mutation name
// value: payload type of mutation
export interface StoreMutations {
  [ActionTypes.AddTodo]: Todo,
  [ActionTypes.ChangeTodoStatus]: { todo: Todo, status: TodoStatusCode },
  [ActionTypes.SelectTodoToEdit]: Todo,
  [ActionTypes.EditTodo]: Todo,
}

// Actions
// key: action name
// value: payload type of action
export interface StoreActions {
  addTodo: (todo: Todo) => void,
  changeTodoStatus: ({ todo, status }: { todo: Todo, status: TodoStatusCode }) => void,
  editTodo: (todo: Todo) => void
}
