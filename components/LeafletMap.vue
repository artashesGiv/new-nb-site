<template>
  <div id="map" class="rounded-xl" />
</template>

<script setup>
import L from 'leaflet'
import { onMounted } from 'vue'

onMounted(() => {
  // Создаем карту
  const map = L.map('map').setView([51.505, -0.09], 20)

  // Добавляем слой с картой OpenStreetMap
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map)

  // Добавляем метку
  const marker = L.marker([51.505, -0.09]).addTo(map).openPopup()
})
</script>

<style scoped>
#map {
  width: 100%;
  height: 100%;
  min-height: 300px;
}
</style>
