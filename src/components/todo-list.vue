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
import { mapActions } from 'vuex';
import { VueConstructor } from "vue";
import { StoreActions } from "@/store/types";

@Component({
  components: {
    TodoItem
  },
  methods: {
    ...mapActions(['changeTodoStatus'])
  }
})
export default class TodoList extends (Vue as VueConstructor<Vue & StoreActions>) {
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

  onTodoStatusChanged(todo: Todo, status: TodoStatusCode) {
    this.changeTodoStatus({ todo, status });
  }
}
</script>

<style lang="css">
</style>
