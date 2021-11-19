<template>
  <div>
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Escribe tu opinión para el juego: {{ juego }}
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="recipient-name" class="col-form-label"
                  >Nombre:</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="recipient-name"
                  v-model="datosOpinion.nombre"
                />
              </div>
              <div class="form-group">
                <label for="message-text" class="col-form-label"
                  >Opiniones:</label
                >
                <textarea
                  class="form-control"
                  id="message-text"
                  v-model="datosOpinion.opinion"
                ></textarea>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              @click="clickear"
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Cerrar
            </button>
            <button @click= "saveOpinion" type="button" class="btn btn-primary" data-dismiss="modal">
              Guardar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "component-Modal",
  props: {
    modal: Boolean,
    id: Number,
    juego: String,
  },
  data: function () {
    return {
      datosOpinion: {
        nombreJuego:"",
        nombre: '',
        opinion: '',
      },
    };
  },
  computed: {
    ...mapState(["juegos", "opiniones"]),
  },
  methods: {
      clickear() {
      this.$emit("clickear = false");
      },

      saveOpinion() {             
      let valido = true;
      
      if (this.datosOpinion.nombre == "") {
        valido = false;
      }
      if (this.datosOpinion.opinion == "") {
        valido = false;
      }
      if (valido) {        
        this.datosOpinion.nombreJuego = this.juego
        let opinion = {...this.datosOpinion };
        this.guardarOpinion(opinion);
        this.cleanModal()
      }     
    },
    cleanModal(){
      this.datosOpinion.nombre = ''
      this.datosOpinion.opinion = ''    
    },
    // -- UI Modification
    // -- Data fetching
    // -- Data handling and transformations
    // -- Validations and Error handling
    // -- Other functions
    // -- Vuex mappings     
     ...mapActions(["guardarOpinion"]),
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
</style>