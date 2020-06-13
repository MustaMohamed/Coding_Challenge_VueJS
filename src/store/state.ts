import { Todo, TodoStatusCode } from "@/models";
import { StoreState } from './types';

const todoes: Todo[] = [
  {
    id: 1,
    title: 'Title #1',
    duration: 15,
    status: TodoStatusCode.Completed
  }, {
    id: 2,
    title: 'Title #2',
    duration: 0,
    status: TodoStatusCode.InCompleted
  }, {
    id: 3,
    title: 'Title #3',
    duration: 0,
    status: TodoStatusCode.Paused
  }, {
    id: 4,
    title: 'Title #4',
    duration: 0,
    status: TodoStatusCode.Started
  }
]

export const state: StoreState = {
  todoes,
  seletedTodoToEdit: undefined
}
