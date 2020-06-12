<template lang="html">
  <v-card :class="{'todo-card': true, running: todo.isRunning, completed: todo.isCompleted}">
    <v-card-title primary-title>
      <div class='d-flex justify-content-between w-100'>
        <h3 :class="{'headline mb-0': true, completed: todo.isCompleted}">{{ todo.title }}</h3>
        <div class='todo-actions'>
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <v-icon
                :color="todo.isCompleted ? 'blue': ''"
                v-bind="attrs"
                v-on="on"
                @click="markAsCompletedTodo">
                check
              </v-icon>
            </template>
            <span>{{ !todo.isCompleted ? 'Mark as completed' : 'Mark as uncompleted' }}</span>
          </v-tooltip>
          <v-tooltip
            top
            v-if="!todo.isRunning && !todo.isCompleted"
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
            v-if="todo.isRunning && !todo.isCompleted"
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
          color="#2ed573"
          text-color="white"
          small
          label
          outlined
        > Status
        </v-chip>
      </div>
    </v-card-title>
  </v-card>
</template>

<script>
  import { VTooltip } from 'vuetify/lib'
  import { VChip } from 'vuetify/lib'

  export default {
    props: {
      todo: {
        type: Object,
        default: () => {

        },
        /*title: { type: String, default: 'Title' },
        id: { type: Number, default: 0 },
        isCompleted: { type: Boolean, default: false },
        isDeleted: { type: Boolean, default: false },
        isRunning: { type: Boolean, default: false },*/
      },
    },
    components: {
      VTooltip,
      VChip
    },
    methods: {
      markAsCompletedTodo: function() {
        const status = 'completed';
        this.$emit('onTodoStatusChanged', status, this.todo.id);
      },
      markAsNotCompletedTodo: function() {
        const status = 'not completed';
        this.$emit('onTodoStatusChanged', status, this.todo.id);
      },
      markAsRunningTodo: function() {
        const status = 'running';
        this.$emit('onTodoStatusChanged', status, this.todo.id);
      },
      markAsNotRunningTodo: function() {
        const status = 'paused';
        this.$emit('onTodoStatusChanged', status, this.todo.id);
      }
    }
  }
</script>

<style lang="less">
  @cardBorderColor: #00b894;
  @cardRunningBorderColor: #b2bec3;
  @cardCompletedBorderColor: #0984e3;
  .todo-card {
    border-left: 5px solid @cardBorderColor !important;

    &.completed {
      border-left: 5px solid @cardCompletedBorderColor !important;
    }

    &.running {
      border-left: 5px solid @cardRunningBorderColor !important;
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
