<template>
  <div v-on-click-outside="onCloseModal" class="modal">
    <div v-if="title" class="modal__header">
      <div class="modal__title" v-html="title" />
    </div>
    <button
      v-if="isClose"
      class="modal__close"
      @click="onCloseModal"
    >
      ×
    </button>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useModalsStore } from '@/store'
import { vOnClickOutside } from '@vueuse/components'

export type ModalBaseProps = {
  title?: string
  isClose?: boolean
}

const props = withDefaults(defineProps<ModalBaseProps>(), {
  isClose: true,
  closeOnClickOutside: true,
})

const { closeModal } = useModalsStore()

const onCloseModal = () => {
  console.log(close)
  if (props.isClose) {
    closeModal()
  }
}
</script>

<style scoped>
.modal {
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius: 8px;
  background: white;
  box-shadow: 0 8px 20px 0 #84848454;
}

.modal__header {
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: flex-start;
  justify-content: space-between;
}

.modal__title {
  font-weight: 700;
}

.modal__close {
  position: absolute;
  top: 0;
  right: 20px;
  height: 15px;
  font-size: 40px;
  z-index: 1;
}
</style>
