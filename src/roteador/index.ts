import Tarefas from "@/views/Tarefas.vue";
import Projetos from "@/views/Projetos.vue";
import Lista from "@/views/Projetos/Lista.vue";
import Formulario from "@/views/Projetos/Formulario.vue";
import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";


const rotas: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Tarefas',
        component: Tarefas
    },
    {
        path: '/projetos',
        component: Projetos,
        children: [
            {
                path: '',
                name: 'Projetos',
                component: Lista
            },
            {
                path: 'novo',
                name: 'Novo Projetos',
                component: Formulario
            },
            {
                path: ':id',
                name: 'Editar Projeto',
                component: Formulario,
                props: true
            },
        ]
    }
]

const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas
})

export default roteador;