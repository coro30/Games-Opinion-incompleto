<template>
    <div>
        <h2> Lista de Juegos Disponibles</h2>
        <CardJuego></CardJuego>
    </div>
</template>

<script>
import CardJuego from '@/components/CardJuego.vue'
export default {
    name: 'home',
    // props: {},
    data: function(){
        return {}
    },
    // computed: {},
    //methods: {
        // -- UI Modification
        // -- Data fetching
        // -- Data handling and transformations
        // -- Validations and Error handling
        // -- Other functions
        // -- Vuex mappings
    //},
    // watch: {},
    components: {
        CardJuego,
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>