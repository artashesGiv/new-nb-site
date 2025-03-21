<template>
  <main-header
    class="transition-base absolute inset-x-0 top-0 z-50 transition-transform md:fixed"
    :class="{ '-translate-y-full': !isVisible }"
  />
  <section-main />
  <section-about class="section-space" />
  <section-partners class="section-space" />
  <section-services class="section-space" />
  <section-technologies class="section-space" />
  <section-projects class="section-space mb-[48px] md:mb-[124px]" />
  <div class="section-space" />
  <MainFooter class="section-space mb-[48px] md:mb-[124px]" />
  <modal-all />
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import MainFooter from '~/components/main-footer.vue'

const isVisible = ref(true)
let lastScroll = 0

useNoScrollBody()

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
