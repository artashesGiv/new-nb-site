<template>
  <header
    class="section-container shadow-base flex justify-between rounded-b-[16px] bg-white py-[40px] md:rounded-none md:shadow-none xl:py-[53.5px]"
  >
    <logo />
    <ul class="hidden items-center gap-[60px] md:flex xl:gap-[108px]">
      <li
        v-for="link in links"
        :key="link"
        class="hover:text-main-orange transition-base cursor-pointer text-[20px] transition-colors xl:text-[28px]"
      >
        {{ link }}
      </li>
    </ul>
    <div
      class="flex cursor-pointer items-center md:hidden"
      @click="onToggleMenu(true)"
    >
      <icon name="icons:burger" class="text-dark-gray text-[20px]" />
    </div>
    <teleport to="body">
      <transition name="dropdown">
        <div
          v-if="isOpenMenu"
          ref="target"
          class="absolute inset-x-0 top-0 z-50 w-full md:hidden"
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
