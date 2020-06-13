<template>
  <v-app>
    <v-toolbar
      app
    >
      <v-toolbar-title v-text="title" />
    </v-toolbar>
    <v-content>
      <v-layout
        class="todo-layout"
        align-center
        fill-height
        justify-center
      >
        <v-flex xs6>
          <h1>Vue Todo App</h1>
          <TodoForm />
          <TodoList />
        </v-flex>
      </v-layout>
    </v-content>
  </v-app>
</template>

<script lang='ts'>
import TodoForm from './components/todo-form.vue'
import TodoList from './components/todo-list.vue'

export default {
  name: 'App',
  components: {
    TodoForm,
    TodoList,
  },
  data() {
    return {
      title: 'Vue Todos'
    }
  }
}
</script>

<style lang='less'>
  .todo-layout {
    margin: 1rem 0;

    h1 {
      text-align: center;
      margin: 2rem auto;
    }
  }
</style>
