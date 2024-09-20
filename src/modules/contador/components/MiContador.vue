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
<p>{{ contador }}</p>
<br>
<button @click="incrementar" class="incrementar">incrementar</button>
<button @click="decrementar" class="decrementar">Decrementar</button>
</template>

<style scoped>
.incrementar{
  background-color: green;
}

.decrementar{
  background-color: red;
}
</style>
