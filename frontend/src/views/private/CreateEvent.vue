<template>
  <div>

    <b-alert :show="dismissCountDown" dismissible fade variant="info" @dismiss-count-down="countDownChanged">
      Crie um novo evento abaixo
    </b-alert>

<!-- v-if="created!= true" -->
    <marcoPolo :cData="{action:true}" @eventCreated="nextStep" v-if="step == 1"></marcoPolo>
    
    <div v-if="step == 2">
      
      Selecione as tag para seu evento: 
 
      <tag></tag>

    <b-button variant="success" @click="nextStep()">Button</b-button>
    </div>
    <button @click="nextStep()"></button>
<!-- {{step}} -->

    
<!-- 
    <div class="col-6 mt-7">
      <p>Adicionar tag:</p>
    </div> -->


    <!-- <div class="container box-info box-tags">
      <tag @click="getTag"></tag>
    </div> -->



  </div>

</template>

<script>
// import axios from 'axios';
import tag from '../../components/cpmTag.vue'
import marcoPolo from '../../components/cpmCreateEvent.vue'

export default {
  name: 'cadastro',

  components: {
    tag,
    marcoPolo
  },
  data: () => ({
    step:1,

    datas: '',
    data: {
      email: '',
      password: ''
    },
    info: '',
    dismissSecs: 8,
    dismissCountDown: 8,
    showDismissibleAlert: false
  }),
  mounted() {

    // sendTags(){

    // axios.post('http://localhost:3000/api/preferences/event')
    // .then(response => this.data = response.data);
    
    // }


  },
  methods: {
    nextStep(resp){
         /* eslint-disable no-console */
      console.log(resp)
      this.step ++;
    }
  },
  computed: {

  },
  watch: {}

}
</script>
<style>
</style>