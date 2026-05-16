<script setup lang="ts">
import type { Task } from '@/types/task'
import TaskItem from './TaskItem.vue'

defineProps<{
  tasks: Task[]
}>()
</script>

<template>
  <ul class="task-list">
    <TaskItem
      v-for="task in tasks"
      :key="task.id"
      :task="task"
    />
  </ul>
</template>

<style scoped>
.task-list {
  list-style: none;
  padding: 0;
}
</style>