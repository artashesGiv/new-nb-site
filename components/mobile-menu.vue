<template>
  <div
    class="relative px-[18px] py-[24px] rounded-b-[16px] bg-white shadow-base"
  >
    <ul class="flex flex-col items-center gap-[8px]">
      <li
        v-for="link in links"
        :key="link"
        class="cursor-pointer text-[24px] py-[10px] hover:text-main-orange transition-colors transition-base"
      >
        {{ link }}
      </li>
    </ul>
    <img
      src="/images/header-mobile-decorator.png"
      alt="decorator"
      class="absolute inset-x-0 bottom-0 select-none pointer-events-none"
    />
  </div>
</template>

<script setup lang="ts">
export type MobileMenuProps = {
  links?: string[]
}

defineProps<MobileMenuProps>()
</script>

<style scoped></style>
