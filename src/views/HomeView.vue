<script setup lang="ts">
import { useTaskStore } from '@/stores/taskStrore'
import TaskForm from '@/components/TaskForm.vue'
import TaskList from '@/components/TaskList.vue'

const taskStore = useTaskStore()
</script>

<template>
  <main class="container">
    <h1>TaskFlow</h1>

    <TaskForm />

    <input
      v-model="taskStore.searchQuery"
      class="search-input"
      type="text"
      placeholder="Search tasks..."
    />

    <p>{{ taskStore.searchQuery }}</p>

    <div class="task-stats">
      <p>Total: {{ taskStore.tasks.length }}</p>
      <p>Completed: {{ taskStore.completedTasks.length }}</p>
      <p>Pending: {{ taskStore.pendingTasks.length }}</p>
    </div>

    <div class="filters">
      <button @click="taskStore.filter = 'all'">
        All
      </button>

      <button @click="taskStore.filter = 'completed'">
        Completed
      </button>

      <button @click="taskStore.filter = 'pending'">
        Pending
      </button>
    </div>

    <TaskList :tasks="taskStore.filteredTasks" />
  </main>
</template>

<style scoped>
.container {
  max-width: 760px;
  margin: 50px auto;
  padding: 32px;
  font-family: Inter, Arial, sans-serif;
}

h1 {
  font-size: 36px;
  margin-bottom: 8px;
}

.search-input {
  width: 100%;
  padding: 14px;
  margin-bottom: 20px;
  border: 1px solid #d1d5db;
  border-radius: 10px;
  font-size: 15px;
}

.search-input:focus {
  outline: none;
  border-color: #111827;
}

.task-stats {
  display: flex;
  gap: 18px;
  margin-bottom: 24px;
  font-size: 15px;
  color: #555;
}

.filters {
  display: flex;
  gap: 12px;
  margin-bottom: 28px;
}

.filters button {
  padding: 10px 18px;
  border: none;
  border-radius: 8px;
  background-color: #f3f4f6;
  cursor: pointer;
  transition: 0.2s ease;
  font-weight: 500;
}

.filters button:hover {
  background-color: #e5e7eb;
}
</style>