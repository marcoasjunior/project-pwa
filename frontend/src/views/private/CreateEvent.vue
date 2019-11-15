<template>
  <div>



    <marcoPolo></marcoPolo>

    <div class="col-6 mt-7">
      <p>Adicionar tag:</p>
    </div>

    <div class="container box-info box-tags">
      <tag></tag>
    </div>



  </div>

</template>

<script>
import axios from 'axios';


import tag from '../../components/cpmTag.vue'
// import cardAddress from '../../components/cardAddress.vue'
import marcoPolo from '../../components/cpmCreateEvent.vue'



export default {
  name: 'cadastro' //this is the name of the component,  
  ,components: {
    // inputs,
    tag,
  //  cardAddress,
    marcoPolo
  },

  created() {
          // this.checkUser();
        },
        data: () => ({
          datas: '',
          data:{email:'',password:''},
          info:''
        }),
        mounted() {

          axios.get('http://localhost:3000/api/tags/preferences')
          .then(response => this.data = response.data);

        },
        methods: {

        },
        computed: {
        
        },
        watch: {}

}
</script>
<style>
</style>