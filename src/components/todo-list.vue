<template lang="html">
  <div>
    <TodoItem
      class="mb-3"
      v-for="todo in todos.filter(isRunning)"
      :key="todo.id"
      :todo="todo"
      @onTodoStatusChanged="onTodoStatusChanged"
    />
    <TodoItem
      class="mb-3"
      v-for="todo in todos.filter(isNotCompleted)"
      :key="todo.id"
      :todo="todo"
      @onTodoStatusChanged="onTodoStatusChanged"
    />
    <TodoItem
      class="mb-3"
      v-for="todo in todos.filter(isCompleted)"
      :key="todo.id"
      :todo="todo"
      @onTodoStatusChanged="onTodoStatusChanged"
    />
  </div>
</template>

<script>
  import TodoItem from '@/components/todo-item';

  export default {
    components: {
      TodoItem,
    },
    data: function () {
      return {
        todos: [{
          id: 1,
          title: 'Todo Title #1',
          isCompleted: true,
          isDeleted: false,
          isRunning: false,
        }, {
          id: 2,
          title: 'Todo Title #2',
          isCompleted: false,
          isDeleted: false,
          isRunning: false
        }, {
          id: 3,
          title: 'Todo Title #3',
          isCompleted: false,
          isDeleted: false,
          isRunning: true,
        }]
      };
    },
    methods: {
      isCompleted: (todo)=> {
        return todo.isCompleted && !todo.isRunning;
      },
      isRunning: (todo) => {
        return !todo.isCompleted && todo.isRunning;
      },
      isNotCompleted: (todo) => {
        return !todo.isCompleted && !todo.isRunning;
      },
      onTodoStatusChanged: (status, id) => {
        alert(status + id);
        const idx = this.todos.findIndex(f => f.id == id);
      }
    }
  }
</script>

<style lang="css">
</style>
