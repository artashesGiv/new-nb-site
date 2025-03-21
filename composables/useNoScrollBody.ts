import { useModalsStore } from '@/store'

export const useNoScrollBody = () => {
  const { isModalOpen } = storeToRefs(useModalsStore())

  const updateBodyClass = () => {
    // Если загрузка или модальное окно открыто – добавляем класс
    if (isModalOpen.value) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }
  }

  watch(isModalOpen, updateBodyClass)
}
