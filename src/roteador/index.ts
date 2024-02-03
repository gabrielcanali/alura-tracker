import Projetos from "@/views/Projetos.vue";
import Tarefas from "@/views/Tarefas.vue";
import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";


const rotas: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Tarefas',
        component: Tarefas
    },
    {
        path: '/projetos',
        name: 'Projetos',
        component: Projetos
    },
]

const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas
})

export default roteador;