<template>
    <button v-bind="$attrs" class="button" @click="clicado" :disabled="desabilitado">
        <span class="icon">
            <i class="fas fa-play" :class="['fas', `fa-${texto}`]"></i>
        </span>
        <span>{{ texto }}</span>
    </button>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'

    export default defineComponent({
        name: 'Botao',
        props: {
            texto: {
                type: String,
                default: '',
                required: true
            },
            desabilitado: {
                type: Boolean,
                default: false,
                required: true
            }
        },
        methods: {
            clicado () : void {
                this.$emit('clicado')
            }
        },
        emits: ['clicado']
    })
</script>

<style scoped>

</style>