CreateEvent.vue


<template>
  <div>

    <b-alert :show="dismissCountDown" dismissible fade variant="info" @dismiss-count-down="countDownChanged">
      Crie um novo evento abaixo
    </b-alert>

<p>
  aqui
</p>

    <cpmCreateEvent :cData="{action:true}" @eventCreated="nextStep" v-if="step == 1"></cpmCreateEvent>

      <div v-if="step == 2">
        SElecione as tag para seu evento: 

          <tag :tagsData="{data:tagData}" @setTags="setTags"></tag>

      </div>

      <button v-if="step == 1" @click="nextStep()">next</button>
      {{tagsSelected}}

      <button @click="SetPreference()">Set Preference</button>
    

    <!-- <div class="col-6 mt-7">
      <p>Adicionar tag:</p>
    </div>  -->


    <!-- <div class="container box-info box-tags">
      <tag @click="getTag"></tag>
    </div> -->
{{data}}


  </div>

</template>

<script>
import axios from 'axios';
import tag from '../../components/cpmTag.vue'
import cpmCreateEvent from '../../components/cpmCreateEvent.vue'

export default {
  name: 'cadastro',

  components: {
    tag,
    cpmCreateEvent
  },

    
  
  created() {
    this.getTags()
    // this.checkUser();
  },
  data: () => ({
    step:1,
    tagData:'',
    datas: '',
    data: {EventId:'', PreferenceId:''},
    info: '',
    dismissSecs: 8,
    dismissCountDown: 8,
    showDismissibleAlert: false,
    tagsSelected:'',
    idEventoCriado:'',
  }),
  mounted() {
    // sendTags(){

    // axios.get('http://localhost:3000/api/tags/preferences')
    // .then(response => this.data = response.data);

    // axios.post('http://localhost:3000/api/preferences/event')
    // .then(response => this.data = response.data);
    
    // }




  },
  methods: {

    nextStep(resp){
      this.step = 2
      /* eslint-disable no-console */
      console.log("id do evento "+resp)

      this.data.EventId = resp
    },
    getTags(){
      axios.get('http://localhost:3000/api/tags/preferences')
      .then( (response) => {
      this.tagData = response.data;

    
    })
 
    },
       setTags(param){
      //console.log("ha")
      //console.log(param)
      this.tagsSelected = param;


    },

    SetPreference(){
      
      // let quantPreference = this.tagsSelected
      // let itens = 00
        // this.data.PreferenceId = this.tagsSelected


      for(let item in this.tagsSelected ){

        let data = {
          EventId: this.data.EventId,
          PreferenceId:this.tagsSelected[item]       
          }
        axios.post('http://localhost:3000/api/preferences/event', data)
        .then( (response) => {
          // this.tagData = response.data
          console.log(response)
        })


        // console.log(this.data.PreferenceId)
        console.log(item)
        }
        
    }

  },
  computed: {

  },
  watch: {}

}
</script>
<style>
</style>