<script setup>
  import Sidebar from '../components/SideBar.vue';
  import Header from '../components/Header.vue'
  import { ref } from 'vue';

  const texto = ref('')
</script>

<template>
  <Header :mensaje="texto"></Header>
  <!-- con el :mensaje, declaro el nombre de la varieble que estoy enviando como props y el texto es la constante reactiva que estoy capturando en el input -->
  <div class="container">
    <Sidebar />
    <div class="content">
      <input type="text" v-model="texto">
      {{ texto }}
      <RouterView></RouterView>
    </div>
  </div>
</template>

<style>
  .container{
    display: flex;
  }

  .content{
    flex: 1;
    padding: 20px;
  }
</style>