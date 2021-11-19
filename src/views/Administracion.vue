<template>
  <div>
    <h2>Administrando la Lista de Opiniones</h2>
    <div v-if="opiniones.length == 0">
      <p>No existen opiniones por administrar</p>
    </div>    
    <div class="container" v-else>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Persona</th>
            <th scope="col">Juego</th>
            <th scope="col">Opinion</th>
          </tr>
        </thead>
        <tbody >
          <tr v-for= "(opinion,index) in opiniones" :key= "index">
            <th scope="row">{{index}}</th>
            <td>{{opinion.nombre}}</td>
            <td>{{ opinion.nombreJuego }}</td>
            <td>{{opinion.opinion}}</td>
            <td><button class="delete" @click="deleteOpinion(index)">Eliminar</button></td>
            <router-link :to="{ path: `/editar/${index}` }">
            <td><button class="edit">Editar</button></td>
            </router-link>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>


  
<script>
import { mapState, mapActions, mapMutations} from "vuex";
export default {
  name: "administracion",
  data: function () {
    return {}  
  },
  computed: {
    ...mapState(["juegos", "opiniones"]),
  },
  methods: {
    deleteOpinion(index){           
      this.eliminarOpinion(index);
      alert("borrar") 
    },
    
    ...mapActions (["eliminarOpinion"]),
    ...mapMutations(["ELIMINAR_OPINION"])
  },  
  //components: {},
  
};
</script>

<style scoped>
p {
  background-color: rgb(243, 176, 212);
  text-align: left;
  padding-left: 50px;
}
.delete {
  background-color: rgb(230, 18, 18);
  border: rgb(230, 18, 18);
  color: white;
}
.edit {
  background-color: rgb(0, 162, 255);
  border: rgb(0, 162, 255);
}
</style>
