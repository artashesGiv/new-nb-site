<template>
  <main-header
    class="transition-base absolute inset-x-0 top-0 z-50 transition-transform md:fixed"
    :class="{ '-translate-y-full': !isVisible }"
  />
  <section-main />
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const isVisible = ref(true)
let lastScroll = 0

const handleScroll = () => {
  const currentScroll = window.scrollY
  isVisible.value = currentScroll < lastScroll || currentScroll < 120
  lastScroll = currentScroll
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
