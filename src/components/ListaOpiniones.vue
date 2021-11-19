<template>
  <div>
    <div v-if="opiniones.length == 0">
      <p>No existen opiniones por mostrar</p>
    </div>
    <div v-for= "(opinion,index) in opiniones" :key= "index">
    <div class="accordion" id="accordionExample">
      <div class="card">
        <div class="card-header" id="headingOne">
          <h2 class="mb-0">
            <button
              class="btn btn-link btn-block text-left"
              type="button"
              data-toggle="collapse"
              :data-target="`#collapse${index}`"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Opinión creada por  {{opinion.nombre}}. Para el juego  " {{ opinion.nombreJuego }} "  (Click aquí para ver la opinion)
            </button>
          </h2>
        </div>

        <div
          :id="`collapse${index}`"
          class="collapse"
          aria-labelledby="headingOne"
          data-parent="#accordionExample"
        >
          <div class="card-body">
           Opinión: {{opinion.opinion}}
           
          </div>
        </div>
      </div>
    </div>
    </div>

  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "listaOpiniones",
  // props: {},
  data: function () {
    return {};
  },
  computed: {
    ...mapState(["juegos", "opiniones"]),
  },
  methods: {
    // -- UI Modification
    // -- Data fetching
    // -- Data handling and transformations
    // -- Validations and Error handling
    // -- Other functions
    // -- Vuex mappings
  },
  // watch: {},
  // components: {},
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  // -- End Lifecycle Methods
};
</script>


<style scoped>
p {
  background-color: rgb(243, 176, 212);
  text-align: left;
  padding-left: 50px;
}
</style>