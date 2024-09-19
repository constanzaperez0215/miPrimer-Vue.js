<script setup>
  import { ref } from 'vue'

  const tareas = ref([])
  // hago referencia a un array vacío en donde se guardarán las tareas

  const nuevaTarea = ref('')
  // hago una referencia al campo de entrada con un estado inicial vacío

  const addTarea = () => {
    tareas.value.push(nuevaTarea.value)
    nuevaTarea.value = ''
  }
  // contiene la lógica de agregar una nueva tarea a el arreglo tareas y luego vacía el imput

  const borrarTarea = (index) => {
    tareas.value.splice(index, 1)
  }
</script>

<template>
  <div>
    <h2>Lista de tareas</h2>
    <input type="text" v-model="nuevaTarea" @keyup.enter="addTarea">
    <!-- v-model, vincula el input con la entrada de una nueva tarea  -->
    <!-- @keyup.enter, escucha el evento enter para llamar a la función addTarea -->
    <ul>
      <li v-for="(tarea, index) in tareas" :key="index">
        <!-- v-for=(tarea, index) in tareas, Itera sobre el array tareas con un ciclo FOR // :key=index, Se utiliza key para dar una identificación única a cada elemento de la lista -->
        {{ tarea }}
        <button @click="borrarTarea(index)">Eliminar</button>
      </li>
    </ul>
  </div>
</template>

<style></style>