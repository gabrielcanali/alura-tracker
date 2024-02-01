<template>
    <section>
        <strong>
            {{ tempoDecorrido }}
        </strong>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Cronometro',
    props: {
        tempoEmSegundos: {
            type: Number,
            default: 0,
            required: true
        }
    },
    computed: {
        tempoDecorrido (): string {
            return new Date(this.tempoEmSegundos * 1000).toISOString().substring(11, 19)
        }
    },
})
</script>

<style scoped>

</style>