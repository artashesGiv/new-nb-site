<template>
  <div id="projects" class="section-container flex flex-col gap-[48px]">
    <h3 class="my-text-xl">
      Наши проекты
    </h3>
    <div class="grid grid-cols-1 xl:grid-cols-2 xl:grid-rows-2 gap-[32px]">
      <ui-card-base v-for="(project, idx) in projectList" :key="`project-${idx}`">
        <div class="flex flex-col gap-[32px] w-full h-full">
          <img class="rounded-2xl" :src="project.src" :alt="`project-${idx}`" />
          <span class="my-text-l font-medium">
            {{ project.text }}
          </span>
        </div>
      </ui-card-base>
    </div>
  </div>
</template>

<script setup lang="ts">
const projectList: { src: string; text: string; href?: string; } = [
  { src: '/images/project/project-1.jpg', text: 'Разработка и внедрение информационной системы «Агрополия» (ГИС АПК МСХиП РТ)' },
  { src: '/images/project/project-2.jpg', text: 'Разработка комплексной цифровой платформы для цифровизации федерального ВУЗа' },
  { src: '/images/project/project-3.jpg', text: 'Бизнес-анализ процессов МСХ РФ' },
  { src: '/images/project/project-4.jpg', text: 'Бизнес-анализ процессов в рамках создания ГИС НБГИ' },
]
</script>

<style scoped>

</style>
