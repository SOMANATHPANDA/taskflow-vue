import { watch, type Ref } from 'vue'

export const useLocalStorage = <T>(
  key: string,
  state: Ref<T>
) => {
  watch(
    state,
    (newValue) => {
      localStorage.setItem(key, JSON.stringify(newValue))
    },
    { deep: true }
  )
}