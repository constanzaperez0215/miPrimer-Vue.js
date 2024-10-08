<script setup>
  import { defineProps } from 'vue';

  const props = defineProps(
    [
      'resultado'
    ]
  )
</script>

<template>
  <div class="resultado">{{ resultado }}</div>
</template>

<style scope>
  .resultado{
    background-color: aqua;
  }
</style>