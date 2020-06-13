<template lang="html">
  <v-text-field
    label="Todo"
    v-model="todoTitle"
    @keyup.enter="handleAddTodo"
    placeholder="What do you have to do?"
    solo
  />
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import { mapActions } from 'vuex';
import { Todo, TodoStatusCode } from '@/models';

@Component({
  methods: {
    ...mapActions(['addTodo'])
  }
})
export default class TodoForm extends Vue {
  public todoTitle: string = '';

  handleAddTodo() {
    console.log(this.todoTitle, this);
    if (this.todoTitle.length) {
      const todo: Todo = {
        id: 0,
        status: TodoStatusCode.InCompleted,
        duration: 0,
        title: this.todoTitle
      };
      this.addTodo(todo);
      this.todoTitle = '';
    }
  }
}
</script>

<style lang="css">
</style>
