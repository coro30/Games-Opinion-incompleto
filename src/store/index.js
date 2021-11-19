
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    juegos: [],

    opiniones:[],
  },
  mutations: {
    GET_JUEGO:(state, juegos) => {
      state.juegos = juegos
    },
    GUARDAR_OPINION:(state,opinion) => {
      state.opiniones.push(opinion)
    },
    ELIMINAR_OPINION:(state,index)=> {
      state.opiniones.splice(index,1)
    },
    EDITAR_OPINION:(state, opinion)=> {
      state.opiniones[opinion.index] = {
        nombre:opinion.nombre,
        opinion:opinion.opinion,
        nombreJuego:opinion.nombreJuego
      }
    }
  },
  actions: {
    async getJuego({commit}) {
      try {
        let response = await fetch(`https://api.rawg.io/api/games?key=0c86da15f6154f87961521baec201a53`);
        let data = await response.json();
        console.log(data);
        commit ("GET_JUEGO", data.results);
       
       } catch (error) {
        console.log(error);
      }
    },

    guardarOpinion:({commit},opinion)=>{         
      commit('GUARDAR_OPINION',opinion)
    },

    eliminarOpinion:({commit},index)=>{      
      commit('ELIMINAR_OPINION',index)
    },
    
    editarOpinion:({commit},opinion)  => {
      commit('EDITAR_OPINION',opinion)
    }
  }  
})

