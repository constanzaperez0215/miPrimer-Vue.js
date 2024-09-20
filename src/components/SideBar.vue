<script setup></script>
<template>
  <div class="sidebar">
    <h2>Barra Lateral</h2>
    <ul>
      <li>
        <RouterLink to="/contador">Contador</RouterLink>
      </li>
      <li>
        <RouterLink to="/lista-de-tareas">Lista de Tareas</RouterLink>
      </li>
    </ul>
  </div>
</template>

<style>
 .sidebar{
  width: 200px;
  height: 100vh;
  background-color: gray;
  padding: 20px;
 }
</style>