<template>
  <div id="partners" class="section-container flex flex-col gap-[64px]">
    <div class="flex flex-col gap-[24px] lg:flex-row lg:gap-[32px]">
      <div class="section-content lg:w-1/2">
        <h3 class="my-text-xl">
          Наши партнёры
        </h3>
      </div>
      <div class="my-text-m">
        Мы стремимся не только к профессиональному совершенству, но и к созданию прочных и долгосрочных бизнес-отношений с нашими партнёрами
      </div>
    </div>
    <div class="flex flex-row flex-wrap justify-between gap-[32px] ">
      <ui-card-base v-for="card in partnersList" :key="card.name" class="card-base" :href="card.href" bg="bg-main-gray">
        <img v-if="card.src" :src="card.src" alt="card.name" />
        <span v-else-if="card.text" class="text-[48px] font-semibold text-main-white italic">{{ card.text }}</span>
      </ui-card-base>
    </div>
  </div>
</template>

<script setup lang="ts">
const partnersList: { name: string; src?: string; text?: string; href?: string; } = [
  { name: 'digitol', src: '/images/partners/digitol.png' },
  { name: 'rivc', src: '/images/partners/rivc.png' },
  { name: 'mshrt', text: 'МСХРТ' },
  { name: 'rostelecom', src: '/images/partners/rostelecom.png' },
]
</script>

<style scoped>
</style>
