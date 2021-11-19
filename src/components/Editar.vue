<template>
  <div>
    <h2>Editando la opinión de:{{nombreJuego}}</h2>
    <form class="col-12">
      <label for="">Nombre:</label><br />
      <input type="text" v-model="nombre"/><br />
      <label for="">Opiniones</label><br />
      <textarea v-model="opinion"      
        
      ></textarea
      ><br />
      <router-link :to="{ path: `/administracion` }">
      <button class="comeback">Regresar</button>
      </router-link>
      <button class="save" @click.prevent= "saveOpinion">Guardar</button>      
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "component-editar",
  props: ["index"],
    
  data: function () {
    return {
      nombre:"",
      opinion:"",
      nombreJuego:"",
    };
  },
computed: {
  ...mapState(["juegos", "opiniones"]),
  },
  methods: {
    setForm (){
      let editarOpinion = this.opiniones[this.index]
      this.nombre = editarOpinion.nombre;
      this.opinion = editarOpinion.opinion;
      this.nombreJuego = editarOpinion.nombreJuego;
      console.log(editarOpinion)
      console.log(this.index)      
    },
    saveOpinion(){
      let opinionEditada = {
        index:this.index,
        nombre:this.nombre, 
        opinion:this.opinion,
        nombreJuego:this.nombreJuego
        }
      this.editarOpinion(opinionEditada);
      alert("Opinion Editada");
      this.$router.push("/administracion");
    },
    ...mapActions (["editarOpinion"])
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
  created() {
    this.setForm()
  }
  // -- End Lifecycle Methods
};
</script>

<style scoped>
.comeback {
  background-color:rgb(12, 122, 185) ;
  border: rgb(12, 122, 185);
  margin-right: 40px;
}
.save {
  background-color:rgb(0, 162, 255) ;
  border: rgb(0, 162, 255);
}
</style>