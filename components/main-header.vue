<template>
  <header
    class="flex justify-between rounded-b-[16px] px-[18px] py-[40px] md:rounded-none xl:px-[64px] xl:py-[53.5px] bg-white"
  >
    <logo />
    <ul class="hidden md:flex items-center gap-[60px] xl:gap-[108px]">
      <li
        v-for="link in links"
        :key="link"
        class="text-[20px] xl:text-[28px] cursor-pointer"
      >
        {{ link }}
      </li>
    </ul>
    <div class="flex items-center cursor-pointer md:hidden">
      <icon name="icons:burger" class="text-gray-500 text-[20px]" />
    </div>
    <mobile-menu :links="links" />
  </header>
</template>

<script setup lang="ts">
const links = ref(['О компании', 'Услуги', 'Проекты', 'Контакты'])
</script>

<style scoped></style>
