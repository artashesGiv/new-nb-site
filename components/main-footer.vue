<template>
  <footer id="contacts" class="section-container">
    <div class="h-px w-full mb-[24px] bg-main-gray" />
    <div class=" grid grid-cols-1 xl:grid-cols-[1fr_2fr] gap-[32px] footer-container">
      <div>
        <LeafletMap />
      </div>
      <div class="flex flex-col items-center md:items-start gap-[32px] sm:gap-[64px]">
        <div class="flex flex-col items-center md:items-start sm:flex-row justify-between w-full gap-[16px]">
          <div class="flex flex-col items-center  text-center md:items-start gap-[16px] sm:gap-[32px] my-text-s">
            <span>г. Казань, ул. Односторонка Ноксинская, д.1, помещ. 9</span>
            <span class="select-none">+7 (908) 334 09 19</span>
            <span class="select-none underline">info@it-nb.ru</span>
          </div>
          <img class="w-[184px]" src="/images/footer/qr.png" alt="qr" />
        </div>
        <div class="flex flex-col items-center md:items-start sm:flex-row justify-between w-full gap-[16px]">
          <div class="flex flex-col items-center md:items-start gap-[16px] my-text-s">
            <span class="my-text-m  text-center md:text-start">Акционерное общество «Нью Бренд» (АО «Нью Бренд»)</span>
            <div class="flex flex-row justify-center md:justify-start flex-wrap gap-[10px] text-[14px] sm:text-[20px] text-dark-gray">
              <span>ИНН 1686032615</span>
              <span>КПП 168601001</span>
              <span>ОГРН 1231600054751</span>
            </div>
            <a target="_blank" rel="noopener noreferrer" class="underline text-dark-gray" href="https://disk.yandex.ru/i/inbYxlcGaaYwTg">Политика конфиденциальности</a>
          </div>
          <img class="w-[184px] h-[50%] sm:self-end" src="/images/footer/logo.png" alt="logo" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">

</script>

<style scoped>
</style>
