<script setup lang="ts">
import { ref } from 'vue'
import type { Task } from '@/types/task'
import { useTaskStore } from '@/stores/taskStrore'

defineProps<{
  task: Task
}>()

const taskStore = useTaskStore()
const isEditing = ref(false)
const editedTitle = ref('')

const startEditing = (title: string) => {
  editedTitle.value = title
  isEditing.value = true
}

const saveTask = (id: number) => {
  if (!editedTitle.value.trim()) return

  taskStore.updateTask(id, editedTitle.value)

  isEditing.value = false
}
</script>

<template>
  <li>
    <div class="task-content">
      <input
        type="checkbox"
        :checked="task.completed"
        @change="taskStore.toggleTask(task.id)"
      />

      <div v-if="isEditing" class="edit-container">
        <input
          v-model="editedTitle"
          class="edit-input"
          type="text"
        />

        <button
          class="save-btn"
          @click="saveTask(task.id)"
        >
          Save
        </button>
      </div>

      <span
        v-else
        :class="{ completed: task.completed }"
      >
        {{ task.title }}
      </span>
    </div>

    <div class="action-buttons">
  <button
    class="edit-btn"
    @click="startEditing(task.title)"
  >
    Edit
  </button>

  <button
    class="delete-btn"
    @click="taskStore.deleteTask(task.id)"
  >
    Delete
  </button>
</div>
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

.action-buttons {
  display: flex;
  gap: 10px;
  align-items: center;
}

.edit-container {
  display: flex;
  gap: 8px;
  align-items: center;
}

.edit-input {
  padding: 8px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
}

.edit-btn {
  border: none;
  background-color: #2563eb;
  color: white;
  padding: 10px 14px;
  border-radius: 8px;
  cursor: pointer;
}

.task-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

.save-btn {
  border: none;
  background-color: #16a34a;
  color: white;
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
}
</style>