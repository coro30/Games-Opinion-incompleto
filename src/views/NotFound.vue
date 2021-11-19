<template>
    <div container>
        <div class ="notfound">
            <p class ="number">404</p>
            <p>Not Found</p>
        </div>
    </div>    
</template>

<script>
export default {
  name: "NotFound",
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
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
.container {
   position: relative;
}
.notfound {
    width: 500px;
    height: 400px;
    background-color:blue;
    color: white;
    text-align: center;
    font-weight: 400px;
    font-size: 40px;
    position: absolute;
    left: 30%;
    top: 30%;      
    }
.number {
    font-weight: 700;
    font-size: 150px;
}
    
</style>