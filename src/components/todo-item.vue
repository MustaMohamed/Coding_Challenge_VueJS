<template lang="html">
  <v-card :class="{'todo-card': true, running: this.isStarted, completed: this.isCompleted, paused: this.isPaused}">
    <v-card-title primary-title>
      <div class='d-flex justify-content-between w-100'>
        <h3 :class="{'headline mb-0': true, completed: this.isCompleted}">{{ todo.title }}</h3>
        <div class='todo-actions'>
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <v-icon
                :color="isCompleted ? 'blue': ''"
                v-bind="attrs"
                v-on="on"
                @click="toggleCompletedTodo">
                check
              </v-icon>
            </template>
            <span>{{ !isCompleted ? 'Mark as completed' : 'Mark as uncompleted' }}</span>
          </v-tooltip>
          <v-tooltip
            top
            v-if="!this.isStarted && !this.isCompleted"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-icon
                color="#a4b0be"
                v-bind="attrs"
                v-on="on"
                @click="markAsRunningTodo">
                not_started
              </v-icon>
            </template>
            <span>Start Task</span>
          </v-tooltip>
          <v-tooltip
            top
            v-if="this.isStarted"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-icon
                color="#a4b0be"
                v-bind="attrs"
                v-on="on"
                @click="markAsNotRunningTodo">
                pause_circle_outline
              </v-icon>
            </template>
            <span>Pause Task</span>
          </v-tooltip>
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <v-icon
                color="red"
                v-bind="attrs"
                v-on="on">
                delete_forever
              </v-icon>
            </template>
            <span>Delete</span>
          </v-tooltip>
        </div>
      </div>
      <div>
        <v-chip
          class="ma-2"
          :color="this.cardStatusColor"
          text-color="white"
          small
          label
          outlined
        > {{ todo.status }}
        </v-chip>
      </div>
    </v-card-title>
  </v-card>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Todo, TodoStatusCode } from '../models/todo';
import { VChip, VTooltip } from 'vuetify/lib';

@Component({
  components: {
    VChip,
    VTooltip
  }
})
export default class TodoItem extends Vue {
  @Prop() todo!: Todo;

  get isCompleted() {
    return this.todo.status == TodoStatusCode.Completed;
  }

  get isIncompleted() {
    return this.todo.status == TodoStatusCode.InCompleted;
  }

  get isStarted() {
    return this.todo.status == TodoStatusCode.Started;
  }

  get isPaused() {
    return this.todo.status == TodoStatusCode.Paused;
  }

  get cardStatusColor(): string {
    switch (this.todo.status) {
      case TodoStatusCode.Completed:
        return '#0984e3';
      case TodoStatusCode.InCompleted:
        return '#00b894';
      case TodoStatusCode.Started:
        return '#30336b';
      case TodoStatusCode.Paused:
        return '#b2bec3';
      default:
        return '';
    }
  }

  toggleCompletedTodo() {
    this.todo.status == TodoStatusCode.Completed ?
      this.markAsNotCompletedTodo() : this.markAsCompletedTodo();
  }

  markAsCompletedTodo() {
    const status = TodoStatusCode.Completed;
    this.$emit('onTodoStatusChanged', status, this.todo.id);
  }

  markAsNotCompletedTodo() {
    const status = TodoStatusCode.InCompleted;
    this.$emit('onTodoStatusChanged', status, this.todo.id);
  }

  markAsRunningTodo() {
    const status = TodoStatusCode.Started;
    this.$emit('onTodoStatusChanged', status, this.todo.id);
  }

  markAsNotRunningTodo() {
    const status = TodoStatusCode.Paused;
    this.$emit('onTodoStatusChanged', status, this.todo.id);
  }
}
</script>

<style lang="less">
  @cardBorderColor: #00b894;
  @cardRunningBorderColor: #30336b;
  @cardPausedBorderColor: #b2bec3;
  @cardCompletedBorderColor: #0984e3;
  .todo-card {
    border-left: 5px solid @cardBorderColor !important;

    &.completed {
      border-left: 5px solid @cardCompletedBorderColor !important;
    }

    &.running {
      border-left: 5px solid @cardRunningBorderColor !important;
    }

    &.paused {
      border-left: 5px solid @cardPausedBorderColor !important;
    }

    .todo-actions {
      text-align: right;

      i {
        cursor: pointer;
      }
    }

    .w-100 {
      width: 100%;
    }

    .completed {
      text-decoration: line-through;
    }
  }
</style>
