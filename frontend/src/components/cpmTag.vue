<template>
<div>  

    <button type="submit" class="tag-preferences" v-for="item in tagname" v-bind:key="item.name"> {{item.name}}  <br> </button>

    <!-- <button type="submit" :class=" 'btn white btn-block ' "> </button> -->
</div>

</template>

<script>

export default {
  name: 'cpmButton',
//    props: ['cName'],
      
  components: {
      
  },
  created() {},
        mounted() {

        },
        data: () => ({
            
            tagname: [

                // dados backend
                {name: "Rock"},
                {name: "Balada"},
                {name: "Balada"},
                {name: "Gospel"},
                {name: "Balada"},
                {name: "Balada"},
                {name: "Balada"},
                {name: "Balada"},
                {name: "Balada"},
                {name: "Balada"},
                {name: "Balada"},
                {name: "Balada"},
                {name: "Balada"},
                {name: "Balada"},
                {name: "Festival"}
            ]

        }),
        methods: {
            
        },
        computed: {
        
        },
        watch: {

        }
}
</script>
