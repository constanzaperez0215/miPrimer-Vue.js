<script setup>
  import { ref, computed } from 'vue';
  import ResultadoSection from '../components/ResultadoSection.vue';

  const valor = ref('')
  const valorCalculado = computed(() => {
    return valor.value * 3
  })

  const mostrarElemento = computed(() => {
    return valor.value > 10
  })
</script>

<template>
  <h3>Propiedades computadas</h3>
  <input type="text" v-model="valor">
  {{ valorCalculado }}
  <ResultadoSection v-show="mostrarElemento" :resultado="valorCalculado"></ResultadoSection>
  <!-- El v-show nos retorna un true o false. según sus indicaciones se muestra o no en la pantalla -->

  <ResultadoSection v-if="mostrarElemento" :resultado="valorCalculado"></ResultadoSection>
  <!-- el v-if es similar al v-show pero en este caso el componente desaparece de los elementos del navegador -->

  <div v-else-if="isNaN(valor)">Debe ser un número</div>


   <div v-else>Aquí no se muestra nada</div>
   <!-- queda indexado directamente al v-if, y funciona cuando la condicional del if no se cumple -->
</template>

<style scoped></style>