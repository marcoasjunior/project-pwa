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
