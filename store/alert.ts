import { defineStore } from 'pinia'
export const useAlertStore = defineStore('alertStore', () => {
    const alertActive = ref(false)
    const message = ref('')
    let timeoutId: NodeJS.Timeout | null = null
    function handleAlertMenu(title: string) {
         // Cancelar el temporizador existente
         if (timeoutId !== null) {
            clearTimeout(timeoutId)
            timeoutId = null
        }
        alertActive.value = true
        message.value = title
        timeoutId = setTimeout(() => {
            alertActive.value = false
        }, 3000)
    }
    return { handleAlertMenu, alertActive, message }
  })