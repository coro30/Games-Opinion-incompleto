<template>
  <div id="app">
    <Navegation></Navegation>
    
  </div>
</template>

<script>
import Navegation from "@/views/Navegation.vue";

export default {
  name: "App",
  // props: {},
  data: function () {
    return {};
  },
  // computed: {},
  methods: {
    
    // -- UI Modification
    // -- Data fetching
    // -- Data handling and transformations
    // -- Validations and Error handling
    // -- Other functions
    // -- Vuex mappings
  },
  // watch: {},
  components: {
    Navegation,
  },
  // mixins: [],
  // filters: {},
  
  // -- End Lifecycle Methods
};
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
h2 {
  font-size: 30px;
  font-weight: 600;
  margin-top: 20px;
  margin-bottom: 30px;
}
</style>
