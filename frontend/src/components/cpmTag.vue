<template>
<div>  

    <!-- <button type="submit" class="tag-preferences" v-for="item in tagname" v-bind:key="item.name"> {{item.name}}  <br> </button> -->
    <button type="submit" class="tag-preferences" v-for="item in data" v-bind:key="item.name"> {{item.preference}}  <br> </button>



    <!-- <span v-for="item in data" v-bind:key="item.name" @onload="loadTag()"> {{item.name}}  <br> </span>
    <span> {{ data }}</span> -->


    <!-- <button type="submit" :class=" 'btn white btn-block ' "> </button> -->
</div>

</template>

<script>
import axios from 'axios'

export default {
  name: 'cpmButton',
//    props: ['cName'],
      
  components: {
      
  },
  created() {},
        mounted() {

          axios.get('http://localhost:3000/api/tags/preferences')
          .then(response => this.data = response.data)

        },
        data: () => ({

          data:'',
            
            tagname: [

                // dados backend
                // {name: this.response.data[0].name},
                // {name: "Rock"},
                // {name: "Balança Teta"},
                // {name: "Bailão"},
                // {name: "Gospel"},
                // {name: "Lual"},
                // {name: "Festa de Humanas"},
                // {name: "UFSC"},
                // {name: "UDES"},
                // {name: "Sei não"},
                // {name: "Casa do Marco"},
                // {name: "Casa do Pedro"},
                // {name: "Art's Gastronomia"},
                // {name: "rolezão"},
                // {name: "Balada"},
                // {name: "Pau na lomba"},
                // {name: "Maré Alta"},
                // {name: "trintão"},
                // {name: "Festival"}
            ]

        }),
        methods: {
          loadTag(){
            alert(this.data)
          }

            
        },
        computed: {
        
        },
        watch: {

        }
}
</script>
