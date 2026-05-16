<script setup lang="ts">
import { ref } from 'vue'
import { useTaskStore } from '@/stores/taskStrore'

const taskStore = useTaskStore()

const taskTitle = ref('')

const handleAddTask = () => {
  if (!taskTitle.value.trim()) return

  taskStore.addTask(taskTitle.value)

  taskTitle.value = ''
}
</script>

<template>
  <div class="task-input">
    <input
      v-model="taskTitle"
      type="text"
      placeholder="Enter task..."
    />

    <button @click="handleAddTask">
      Add Task
    </button>
  </div>
</template>

<style scoped>
.task-input {
  display: flex;
  gap: 12px;
  margin-bottom: 28px;
}

.task-input input {
  flex: 1;
  padding: 14px;
  border: 1px solid #d1d5db;
  border-radius: 10px;
  font-size: 15px;
}

.task-input input:focus {
  outline: none;
  border-color: #111827;
}

.task-input button {
  padding: 14px 22px;
  border: none;
  border-radius: 10px;
  background-color: #111827;
  color: white;
  cursor: pointer;
  transition: 0.2s ease;
}

.task-input button:hover {
  opacity: 0.9;
}
</style>