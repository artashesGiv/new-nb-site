<template>
  <div :class="'flex justify-center items-center relative rounded-2xl p-[32px] border border-main-gray ' + bg">
    <slot/>
    <a v-if="href" :href="href" target='_blank' class='absolute top-0 left-0 w-full h-full' />
  </div>
</template>

<script setup lang="ts">
type CardBaseProps = {
  href?: string
  bg?: string
}

withDefaults(defineProps<CardBaseProps>(), {
  bg: 'bg-main-white',
})
</script>

<style scoped>

</style>
