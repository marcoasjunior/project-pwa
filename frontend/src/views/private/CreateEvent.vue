<template>
  <div>

    <b-alert :show="dismissCountDown" dismissible fade variant="info" @dismiss-count-down="countDownChanged">
      Crie um novo evento abaixo
    </b-alert>

    <marcoPolo :cData="{action:true}" @eventCreated="nextStep" v-if="step == 1"></marcoPolo>

      <div v-if="step == 2">
        SElecione as tag para seu evento: 
        <tag></tag>
      </div>

      <button @click="nextStep()">next</button>

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

  created() {
    // this.checkUser();
  },
  data: () => ({
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

    axios.get('http://localhost:3000/api/tags/preferences')
    .then(response => this.data = response.data);

    // axios.post('http://localhost:3000/api/preferences/event')
    // .then(response => this.data = response.data);
    
    // }


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