<template>
  <div class="inline-flex items-center justify-center bg-main-white py-[8px] px-[16px] min-h-[40px] md:min-h-[56px] my-text-s rounded-2xl border-solid border border-(--color-main-blue)">
    {{ text }}
  </div>
</template>

<script setup lang="ts">
type BadgeProps = {
  text: string
}

defineProps<BadgeProps>()
</script>

<style scoped>

</style>
