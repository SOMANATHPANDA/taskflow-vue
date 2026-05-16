<script setup lang="ts">
import type { Task } from '@/types/task'
import { useTaskStore } from '@/stores/taskStrore'

defineProps<{
  task: Task
}>()

const taskStore = useTaskStore()
</script>

<template>
  <li>
    <div class="task-content">
      <input
        type="checkbox"
        :checked="task.completed"
        @change="taskStore.toggleTask(task.id)"
      />

      <span :class="{ completed: task.completed }">
        {{ task.title }}
      </span>
    </div>

    <button
      class="delete-btn"
      @click="taskStore.deleteTask(task.id)"
    >
      Delete
    </button>
  </li>
</template>

<style scoped>
li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border: 1px solid #e5e7eb;
  margin-bottom: 14px;
  border-radius: 12px;
  transition: 0.2s ease;
}

li:hover {
  border-color: #cbd5e1;
}

.task-content {
  display: flex;
  align-items: center;
  gap: 12px;
}

.task-content span {
  font-size: 15px;
}

.completed {
  text-decoration: line-through;
  opacity: 0.5;
}

.delete-btn {
  border: none;
  background-color: #ef4444;
  color: white;
  padding: 10px 14px;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.2s ease;
}

.delete-btn:hover {
  opacity: 0.9;
}
</style>