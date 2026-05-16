import type { Task } from '@/types/task'

export const fetchTasks = (): Promise<Task[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          title: 'Learn Vue 3',
          completed: false,
          createdAt: new Date().toISOString(),
        },
        {
          id: 2,
          title: 'Build Pinia Store',
          completed: true,
          createdAt: new Date().toISOString(),
        },
      ])
    }, 1500)
  })
}