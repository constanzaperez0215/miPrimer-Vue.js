<script setup>
  import { ref } from 'vue'

  const contador = ref(0)

  const incrementar = () => {
    contador.value++
  }

  const decrementar = () => {
    contador.value--
  }
</script>

<template>
<h1>Hello World!!</h1>
<br>
<p>{{ contador }}</p>
<br>
<button @click="incrementar">incrementar</button>
<button @click="decrementar">Decrementar</button>
</template>

<style scoped>

</style>
