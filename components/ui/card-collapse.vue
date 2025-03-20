<template>
  <div
    ref="card"
    class="bg-main-white border-main-gray hover:shadow-base transition-base flex cursor-pointer flex-col justify-center rounded-[8px] border p-[16px] transition-shadow lg:rounded-[16px] lg:p-[32px]"
    @click="toggle"
  >
    <div class="flex items-center gap-[16px] lg:gap-[24px]">
      <img :src="srcIcon" alt="icon" class="w-[40px] lg:w-[88px]" />
      <div class="my-text-m grow">
        {{ title }}
      </div>
      <div>
        <icon
          name="icons:chevron-down"
          :size="iconSize"
          class="text-dark-gray transition-base transition-transform"
          :class="{ 'rotate-180': isOpen }"
        />
      </div>
    </div>

    <div
      ref="contentRef"
      class="my-text-s transition-base self-start overflow-hidden transition-[max-height]"
      :style="{ maxHeight: isOpen ? `${contentHeight}px` : '0px' }"
    >
      <div class="mt-[24px]">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { nextTick, onMounted, ref } from 'vue'

defineProps<CardCollapseProps>()
const isOpen = ref(false)
const contentRef = ref<HTMLElement | null>(null)
const contentHeight = ref(0)

const toggle = async () => {
  isOpen.value = !isOpen.value
  await nextTick()
  if (contentRef.value) {
    contentHeight.value = isOpen.value ? contentRef.value.scrollHeight : 0
  }
}

export type CardCollapseProps = {
  srcIcon: string
  title: string
}

const isLg = useMediaQuery('(min-width: 1024px)')
const iconSize = computed(() => (isLg.value ? '40px' : '28px'))

const target = useTemplateRef<HTMLElement>('card')

onClickOutside(target, () => (isOpen.value = false))

onMounted(() => {
  if (contentRef.value) {
    contentHeight.value = contentRef.value.scrollHeight
  }
})
</script>
