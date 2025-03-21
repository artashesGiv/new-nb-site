import type { ModalProps, ModalPropsMap, ModalTypes } from './types'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useModalsStore = defineStore('modals', () => {
  // state
  const modalType = ref<Maybe<ModalTypes>>(null)
  const modalProps = ref<ModalProps>(null)

  const isModalOpen = computed(() => Boolean(modalType.value))

  // actions
  const openModal = <K extends keyof ModalPropsMap>(
    type: K,
    props?: ModalPropsMap[K],
  ) => {
    modalType.value = type
    modalProps.value = props || null
  }
  const closeModal = () => {
    modalType.value = null
    modalProps.value = null
  }

  return {
    isModalOpen,
    modalType,
    modalProps,
    openModal,
    closeModal,
  }
})
