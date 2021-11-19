<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-4 col-sm-6" v-for="juego in juegos" :key="juego.name">
          <div class="card" style="width: 18rem">
            <div>
              <img :src="juego.background_image" class="card-img-top" alt="imagen juego"/>
            </div>
            <div class="card-body">
              <h5 class="card-title">{{ juego.name }}</h5>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Rating: {{ juego.rating }}</li>
              <li class="list-group-item">Released: {{ juego.released }}</li>
              <li class="list-group-item">Updated: {{ juego.updated }}</li>
            </ul>
            <div class="card-body">
              <div v-show="modal"/>
              <button type="button" class="button" @click="llenarModal(juego)" data-toggle="modal" data-target="#exampleModal">Opinar</button>
              </div>
          </div>
        </div>
      </div>
    </div>      
    <Modal :modal="modal" :id="id" :juego="juego" @clickear="closeModal"/>
  </div>
</template>

<script>
import Modal from "@/components/Modal.vue";
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  name: "cardJuego",
  // props: {},
  data: function () {
    return {
      modal: false,
      juego:"",
      id: 0,
    };
  },
  computed: {
    ...mapState(["juegos"]),
  },
  methods: {
    ...mapActions(["getJuego"]),

    ...mapMutations(["GET_JUEGO"]),

    closeModal(value){
        this.modal = value; 
    }, 
        
    llenarModal(juego){
        console.log(juego)
        this.juego = juego.name
        this.id= juego.id
    }
  } ,
    // -- UI Modification
    // -- Data fetching
    // -- Data handling and transformations
    // -- Validations and Error handling
    // -- Other functions
    // -- Vuex mappings
  
  // watch: {},
  components: {
    Modal
  },
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  created() {
    this.getJuego();
  },
  beforeCreate() {
    this.modal
    this.closeModal;
  },

  // -- End Lifecycle Methods
};
</script>

<style scoped>
.button {
  background-color: cornflowerblue;
  color: white;
  border: cornflowerblue;
  cursor: pointer;
}
</style>