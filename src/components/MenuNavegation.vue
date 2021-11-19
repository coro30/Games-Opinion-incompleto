<template>
  <div class>
      <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav "> 
            <ul>         
              <i class="fas fa-headset" widht ="60" heidth= "60" alt=""></i><p>Games Opinion</p>          
              <li><i class="fas fa-home"></i><router-link :to="{ name: 'home' }">Home</router-link></li>
              <li><i class="fas fa-comments"></i><router-link :to="{ name: 'opiniones' }">Opiniones</router-link></li>
              <li><i class="fas fa-users-cog"></i><router-link :to="{ name: 'administracion' }">Administración</router-link></li>
            </ul>
          </div>
        </div>
      </nav>
      <router-view/>
  </div>
</template>


<script>
export default {
    name: 'menu-navegation',
    // props: {},
    data: function(){
        return {}
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
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
.navbar-nav {
  filter: invert(1);
}

li, p {
  display: inline-block;
  margin-left: 10px;
  font-weight: 700;
  font-size: 20px;
}

li {
  margin-left: 70px;
}

</style>