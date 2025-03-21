<template>
  <transition-fade>
    <div v-if="isModalOpen" class="modals">
      <transition-fade>
        <modal-base class="modals__content">
          <component
            :is="currentModal"
            :key="modalType?.toString()"
            v-bind="modalProps"
          />
        </modal-base>
      </transition-fade>
    </div>
  </transition-fade>
  <transition-fade>
    <div v-if="isModalOpen" class="modals__overlay" />
  </transition-fade>
</template>

<script setup lang="ts">
import type { ModalTypes } from '@/store/modules/modals/types'
import { useModalsStore } from '@/store'

// store
const { isModalOpen, modalType, modalProps } = storeToRefs(useModalsStore())

const modalsMap: Record<ModalTypes, Component> = {
  contact: defineAsyncComponent(
    () => import('@/components/modal/Contact.vue'),
  ),
}

// computed
const currentModal = computed(() => {
  if (modalType.value) {
    return modalsMap[modalType.value]
  }

  return ''
})
</script>

<style scoped>
.modals {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 100;
}

.modals__content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.modals__overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(12px);
  z-index: 99;
}
</style>
