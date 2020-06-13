export interface Todo {
  id: number;
  title: string;
  duration: number;
  status: TodoStatusCode;
}

export enum TodoStatusCode {
  Completed = 'Completed',
  InCompleted = 'InCompleted',
  Started = 'Started',
  Paused = 'Paused',
  Editing = 'Editing',
  Deleted = 'Deleted',
}
