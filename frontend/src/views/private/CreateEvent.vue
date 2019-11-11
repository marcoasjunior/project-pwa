<template>
  <div>

      <!-- <button type="upload" class="upload-image-event">Carrege a imagem</button> -->

<card></card>



        <!-- <input type="file" class="upload" required capture accept="image/*,.pdf">
        <span class="ac upload-image-event" for="file">asnda</span> -->

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
import card from '../../components/cpmCard.vue'



export default {
  name: 'cadastro' //this is the name of the component,  
  ,components: {
    // inputs,
    tag,
    card
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

        }

          

            // axios.get('http://localhost:3000/api/list/user')
            //   .then(response => this.info = response.data)
            //   .catch(e => {this.datas.push(e)})
            //   console.log(response.data)
      ,
        methods: {

        },
        computed: {
        
        },
        watch: {}

}
</script>
<style>
</style>