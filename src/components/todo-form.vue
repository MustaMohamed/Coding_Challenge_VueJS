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
import { Component, Vue, Watch } from 'vue-property-decorator'
import { mapActions } from 'vuex';
import { Todo, TodoStatusCode } from '@/models';
import { VueConstructor } from 'vue';
import { StoreActions } from '@/store/types';

@Component({
  methods: {
    ...mapActions(['addTodo', 'editTodo'])
  }
})
export default class TodoForm extends (Vue as VueConstructor<Vue & StoreActions>) {
  public todoTitle: string = '';
  private isInEditmood: boolean = false;
  private editedTodo: Todo = {
    id: -1,
    title: '',
    status: TodoStatusCode.InCompleted,
    duration: 0
  };

  get editingTodo() {
    return this.$store.getters.selectedTodoToEdit;
  }

  @Watch("editingTodo")
  handleEditing(editing: Todo[]) {
    if (editing.length > 0) {
      this.editedTodo = editing[0];
      this.todoTitle = this.editedTodo.title;
      this.isInEditmood = true;
    }
  }

  handleAddTodo() {
    if (this.todoTitle.length) {
      if (this.isInEditmood) {
        this.editedTodo.title = this.todoTitle;
        this.editTodo(this.editedTodo);
      } else {
        const todo: Todo = {
          id: 0,
          status: TodoStatusCode.InCompleted,
          duration: 0,
          title: this.todoTitle
        };
        this.addTodo(todo);
      }
      this.todoTitle = '';
      this.isInEditmood = false;
    }
  }
}
</script>

<style lang="css">
</style>
