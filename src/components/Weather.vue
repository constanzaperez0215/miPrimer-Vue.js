<script setup>
  import { useWeather } from '../composables/useWeather.js'
  import { onMounted } from 'vue'
  import { useWeatherStore } from '../stores/weatherStore.js'

  const weatherStore = useWeatherStore()

  onMounted(() => {
    useWeather()
  })
  // cuando el archivo se monte, llamará a la función para traer la t°
</script>

<template>
  {{ weatherStore.temperatura }}
</template>

<style lang="css" scoped>

</style>