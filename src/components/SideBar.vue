<script setup>
  import { useRegistrarStore } from '@/modules/registro/stores/registrarStore.js'
  import {ref, watch} from 'vue'

  const registrarStore = useRegistrarStore()
  // Obtengo los datos de mi store
  const nombre = ref(registrarStore.nombre.value)
  const email = ref(registrarStore.email.value)

  //  watch se utiliza para que la variable esté atenta a los cambios realizados
  watch(() => registrarStore.nombre, (newValue) => {
    nombre.value = newValue
  })

  watch(() => registrarStore.email, (newValue) => {
    email.value = newValue
  })

</script>

<template>
  <div class="sidebar">
    <h2>Bienvenido</h2>
    <h3>Nombre: {{ nombre }}</h3>
    <h3>Email: {{ email }}</h3>
    <ul>
      <li>
        <RouterLink to="/contador">Contador</RouterLink>
      </li>
      <li>
        <RouterLink to="/lista-de-tareas">Lista de Tareas</RouterLink>
      </li>
      <li>
        <RouterLink to="/registar">Registar</RouterLink>
      </li>
    </ul>
  </div>
</template>

<style>
 .sidebar{
  width: 200px;
  height: 100vh;
  background-color: rgb(215, 215, 215);
  padding: 20px;
 }
</style>