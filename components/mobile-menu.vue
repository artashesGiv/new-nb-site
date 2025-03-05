<template>
  <div class="rounded-b-[16px] bg-white">
    <ul class="flex-col">
      <li v-for="link in links" :key="link" class="cursor-pointer">
        {{ link }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
export type MobileMenuProps = {
  links?: string[]
}

defineProps<MobileMenuProps>()
</script>

<style scoped></style>
