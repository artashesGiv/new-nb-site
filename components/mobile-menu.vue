<template>
  <div
    class="shadow-base relative rounded-b-[16px] bg-white px-[18px] py-[24px]"
  >
    <ul class="flex flex-col items-center gap-[8px]">
      <li
        v-for="link in links"
        :key="link.id"
        class="hover:text-main-orange transition-base cursor-pointer py-[10px] text-[24px] transition-colors"
        @click="onScroll(link.id)"
      >
        {{ link.title }}
      </li>
    </ul>
    <img
      src="/images/header-mobile-decorator.png"
      alt="decorator"
      class="pointer-events-none absolute inset-x-0 bottom-0 select-none"
    />
  </div>
</template>

<script setup lang="ts">
export type MobileMenuProps = {
  links: { title: string; id: string }[]
}

type Emits = {
  (e: 'close'): void
}

defineProps<MobileMenuProps>()

const { scrollTo } = useSmoothScroll()

const emit = defineEmits<Emits>()

const onScroll = (id: string) => {
  scrollTo(id)
  emit('close')
}
</script>

<style scoped></style>
