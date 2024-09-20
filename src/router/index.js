import { createRouter, createWebHistory } from 'vue-router'
import ListaDeTareas from '@/components/ListaDeTareas.vue'
import MiContador from '@/components/MiContador.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/contador',
      name: 'contandor',
      component: MiContador
    },
    {
      path: '/lista-de-tareas',
      name: 'lista-de-tareas',
      component: ListaDeTareas
    }
  ]
})

export default router
