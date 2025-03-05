<template>
  <section
    class="main-section relative flex h-max min-h-max items-center overflow-hidden md:h-[calc(100vh-121.86px)] xl:h-[calc(100vh-172.25px)]"
  >
    <div
      class="section-container relative z-10 flex w-full flex-col justify-between gap-[40px] py-[58px] text-white lg:flex-row lg:gap-[20px] lg:py-[100px]"
    >
      <div class="flex flex-col gap-[56px] lg:w-1/2">
        <div>
          <h2 class="hero-title">Анализируем</h2>
          <h2 class="hero-title">Создаем</h2>
          <h2 class="hero-title">Масштабируем</h2>
        </div>
        <div class="max-w-[560px] text-[16px] md:text-[32px] lg:max-w-[760px]">
          New Brand предлагает широкий спектр услуг в области
          ИТ по трансформации вашего бизнеса и перехода на цифровой уровень
        </div>
      </div>
      <div class="flex flex-col lg:w-1/2 lg:self-end">
        <button
          class="button-primary lg:button-secondary w-full max-w-[576px] lg:self-end"
        >
          Связаться с нами
        </button>
      </div>
    </div>

    <img
      src="/images/main-bg.jpg"
      alt="main-bg"
      class="image absolute h-full w-full object-cover indent-0"
    />
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
img {
  transition: transform 0.3s ease;
}

.main-section:hover img {
  transform: scale(1.1);
}
</style>
