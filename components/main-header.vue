<template>
  <header
    class="section-container flex justify-between rounded-b-[16px] py-[40px] md:rounded-none xl:py-[53.5px] shadow-base md:shadow-none bg-white"
  >
    <logo />
    <ul class="hidden md:flex items-center gap-[60px] xl:gap-[108px]">
      <li
        v-for="link in links"
        :key="link"
        class="text-[20px] xl:text-[28px] cursor-pointer hover:text-main-orange transition-colors transition-base"
      >
        {{ link }}
      </li>
    </ul>
    <div
      class="flex items-center cursor-pointer md:hidden"
      @click="onToggleMenu(true)"
    >
      <icon name="icons:burger" class="text-dark-gray text-[20px]" />
    </div>
    <teleport to="body">
      <transition name="dropdown">
        <div
          v-if="isOpenMenu"
          ref="target"
          class="absolute inset-x-0 top-0 w-full z-50 md:hidden"
        >
          <mobile-menu :links="links" />
        </div>
      </transition>
    </teleport>
  </header>
</template>

<script setup lang="ts">
const links = ref(['О компании', 'Услуги', 'Проекты', 'Контакты'])

const isOpenMenu = ref(false)
const onToggleMenu = (value: boolean) => {
  isOpenMenu.value = value
}

const target = useTemplateRef<HTMLElement>('target')

onClickOutside(target, () => onToggleMenu(false))
</script>

<style scoped></style>
