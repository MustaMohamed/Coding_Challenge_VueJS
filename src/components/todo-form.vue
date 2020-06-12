<template lang="html">
  <v-text-field
    label="Todo"
    placeholder="What do you have to do?"
    solo
  />
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class TodoForm extends Vue {
}
</script>

<style lang="css">
</style>
