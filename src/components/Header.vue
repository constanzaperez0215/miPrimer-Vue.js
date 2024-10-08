<script setup>
  import Weather from './Weather.vue'
  import { defineProps, ref, watch } from 'vue';

  // con defineProps, se define el nombre del elemento que se está recibiendo desde MainView, para luego crear una nueva variable reactiva con mensaje y poder renderizarlo, pero para que la variable se actualice a medida que lo voy cambiando, necesito ocupar el watch para que esté atento a los cambios ocurridos en el elemento recibido desde el padre (prps.mensaje)
  const props = defineProps(['mensaje'])
  const mensajeRecibido = ref(props.mensaje)

  watch(() => props.mensaje, (newValue) => {
    mensajeRecibido.value = newValue
  })
</script>

<template>
  <div class="header">
    {{ mensajeRecibido }}<Weather />
  </div>
</template>

<style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    top: 0;
    right: 0;
    left: 0;
    background-color: #333;
    color: white;
  }
  h3{
    margin: 0;
  }
</style>