<template lang="html">
  <div>
    <TodoItem
      class="mb-3"
      v-for="todo in started"
      :key="todo.id"
      :todo="todo"
      @onTodoStatusChanged="onTodoStatusChanged"
    />
    <TodoItem
      class="mb-3"
      v-for="todo in paused"
      :key="todo.id"
      :todo="todo"
      @onTodoStatusChanged="onTodoStatusChanged"
    />
    <TodoItem
      class="mb-3"
      v-for="todo in notCompleted"
      :key="todo.id"
      :todo="todo"
      @onTodoStatusChanged="onTodoStatusChanged"
    />
    <TodoItem
      class="mb-3"
      v-for="todo in completed"
      :key="todo.id"
      :todo="todo"
      @onTodoStatusChanged="onTodoStatusChanged"
    />
  </div>
</template>

<script lang='ts'>
import TodoItem from './todo-item.vue'
import { Component, Vue } from 'vue-property-decorator'
import { Todo, TodoStatusCode } from '@/models'

@Component({
  components: {
    TodoItem
  }
})
export default class TodoList extends Vue {
  todos: Todo[] = [
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
  ];

  get completed() {
    return this.$store.getters.completedTodos;
  }

  get notCompleted() {
    return this.$store.getters.incompletedTodos;
  }

  get started() {
    return this.$store.getters.startedTodos;
  }

  get paused() {
    return this.$store.getters.pausedTodos;
  }

  onTodoStatusChanged = (status: TodoStatusCode, id: number) => {
    // pause all running tasks
    if (status == TodoStatusCode.Started) {
      let idx = this.todos.findIndex(f => f.status == TodoStatusCode.Started);
      if (idx != -1) {
        this.todos[idx].status = TodoStatusCode.Paused;
      }
    }

    let idx = this.todos.findIndex(f => f.id == id);
    if (idx != -1) {
      this.todos[idx].status = status;
    }
  }
}
</script>

<style lang="css">
</style>
