import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Task } from '@/types/task'
import { useLocalStorage } from '@/composibles/useLocalStorage'
import { fetchTasks } from '@/services/taskService'

export const useTaskStore = defineStore('tasks', () => {
  const storeTasks = localStorage.getItem('tasks');

  const tasks = ref<Task[]>(storeTasks ? JSON.parse(storeTasks) : [])
  const filter = ref<'all' | 'completed' | 'pending' | 'searchQuery'>('all')
  const searchQuery = ref('')
  const isLoading = ref(false)

  const completedTasks = computed(() =>
    tasks.value.filter((task) => task.completed)
  )

  const pendingTasks = computed(() =>
    tasks.value.filter((task) => !task.completed)
  )

  const filteredTasks = computed(() => {
    let filtered = tasks.value

    if (filter.value === 'completed') {
        filtered = completedTasks.value
    }

    if (filter.value === 'pending') {
        filtered = pendingTasks.value
    }

    if (searchQuery.value.trim()) {
        filtered = filtered.filter((task) =>
        task.title
            .toLowerCase()
            .includes(searchQuery.value.toLowerCase())
        )
    }

    return filtered
    })

  const addTask = (title: string) => {
    tasks.value.push({
      id: Date.now(),
      title,
      completed: false,
      createdAt: new Date().toISOString(),
    })
  }

  const updateTask = (id: number, updatedTitle: string) => {
    const task = tasks.value.find((task) => task.id === id)

    if (task) {
      task.title = updatedTitle
    }
  }

  const toggleTask = (id: number) => {
    const task = tasks.value.find((task) => task.id === id)

    if (task) {
      task.completed = !task.completed
    }
  }

  const deleteTask = (id: number) => {
    tasks.value = tasks.value.filter((task) => task.id !== id)
  }

  const loadTasks = async () => {
    try {
      isLoading.value = true

      const data = await fetchTasks()

      tasks.value = data
    } catch (error) {
      console.error('Failed to load tasks', error)
    } finally {
      isLoading.value = false
    }
  }

    useLocalStorage('tasks', tasks)

  return {
    tasks,
    filter,
    searchQuery,
    isLoading,
    loadTasks,
    filteredTasks,
    completedTasks,
    pendingTasks,
    updateTask,
    addTask,
    toggleTask,
    deleteTask,
  }
})