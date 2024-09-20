import { createRouter, createWebHistory } from 'vue-router'
import ListaDeTareas from '@/modules/listaDeTareas/components/ListaDeTareas.vue'
import MiContador from '@/modules/contador/components/MiContador.vue'
import RegistrarView from '@/modules/registro/views/RegistrarView.vue'


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
    },
    {
      path: '/registar',
      name: 'registar',
      component: RegistrarView
    }
  ]
})

export default router
