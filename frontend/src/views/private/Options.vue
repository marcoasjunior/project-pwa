<template>
  <div>
    <options-card @showModal="showModals" :infoData="info"></options-card>

    <b-modal id='modal1' ref="modalCardUpdate" centered title="Modificar Foto" hide-footer>
      <div class="d-block text-center">
        <cardOptionsUpdate @modalOff='hideModals'  />
      </div>
    </b-modal>
    <optionsSearch></optionsSearch>


<div class="card shadow rounded mb-3">
    <h3 class="mt-4">Preferências de Eventos</h3>
    <div class="container box-info box-tags mt-4">
     <tag class="mt-5" :tagsData="{data:tagData, filtered:tagsFiltered}"  @setTags="selecTags"></tag>
    <b-button class="mt-5 outline-primary button-return ac btn-s" variant="primary" @click="SetPreference()">Selecionar preferências</b-button>
    </div>


    </div>

    <!-- <UserPreference></UserPreference> -->

  <b-button variant="danger" class="sair" @click="outApp()">Sair</b-button>
  </div>
</template>

<script>

import optionsSearch from '../../components/options-search'
import tag from '../../components/cpmTag'
import optionsCard from '../../components/options-card'
import cardOptionsUpdate from '../../components/cardOptionsUpdate'
// import UserPreference from '../../components/cpmUserPref'
import axios from 'axios'




export default {
  components: {
    // UserPreference,
    optionsCard,
    optionsSearch,
    cardOptionsUpdate,
    tag,
  },

  name: 'options',
      data() {
        return {
          info:'',
        tagData:'',
        tagsFiltered:'',
        tagsSelecteds:'',
        data:{UserId:'', PreferenceId:''},
        datas:'',
        tagsSelected:'',
        allTags:[]
    }
  }, 
  created(){
    this.callImage()
     this.getTags()

  },
    mounted() {
      // this.SetPreference()
  },

  methods: {
    
    showModals() {
      this.$refs['modalCardUpdate'].show()
      },

       hideModals() {
         this.$refs['modalCardUpdate'].hide()
          setTimeout( () =>{ 
            this.callImage();
        }, 1500);
      },
      
      callImage(){
        /* eslint-disable no-console */
        axios.get(`http://localhost:3000/api/user/${sessionStorage.getItem('id')}`)
        // axios.get(`https://weparty-app.herokuapp.com/api/user/${sessionStorage.getItem('id')}`)
        .then(response =>{
          this.info = response.data
        }).catch(e => {
          alert(e)
        })
      },


      selecTags(param){
        // alert()
      //console.log("ha")
      console.log(param)
      this.tagsSelected = param;
    },
    SetPreference(){
    
    // let quantPreference = this.tagsSelected
    // let itens = 00
      // this.data.PreferenceId = this.tagsSelected

      

    for(let item in this.tagsSelected ){

      let data = {
        UserId: sessionStorage.getItem('id'),
        PreferenceId:this.tagsSelected[item]
        }
      axios.post('http://localhost:3000/api/preferences/user', data)
      // axios.post('https://weparty-app.herokuapp.com/api/preferences/user', data)
      .then( (response) => {
        // this.tagData = response.data
        console.log("resposta: "+response)
      })

      // console.log(this.data.PreferenceId)
      console.log("item: " + item)
      }

  },

    async getTags(){
     await axios.get('http://localhost:3000/api/tags/preferences')
      // axios.get('https://weparty-app.herokuapp.com/api/tags/preferences')
      .then( (response) => {
     this.tagData = response.data;

      for(let id in this.tagData){
        this.allTags.push(this.tagData[id].id)
        console.log(this.allTags)
      }

    this.getDataSelectedTags()
    })
    },

  
  async getDataSelectedTags(){
    await axios.get(`http://localhost:3000/api/user/preferences/${sessionStorage.getItem('id')}`)
      // axios.get('https://weparty-app.herokuapp.com/api/tags/preferences')
      .then( (response) => {
        this.tagsSelecteds = response.data;
        this.createPreferencesArray(response.data);
        // console.log(this.tagsSelecteds)
    })

    
  },

  createPreferencesArray(preferences){
    let simplifiedArray = [];
    for(let item in preferences){
      simplifiedArray.push(preferences[item].PreferenceId)
    }
    console.log(simplifiedArray)
    console.log('tags', this.tagData)
    let newSarray = []
    for (let item2 in this.allTags){
      if( simplifiedArray.includes(this.allTags[item2])  ){
        newSarray.push(this.allTags[item2])
      }
    }
    this.tagsFiltered = newSarray
    console.log('result',this.tagsFiltered)
    // const found = [1,2,3].find(element => simplifiedArray.includes(element) );
    // let filtered = [1,2,3].filter(simplifiedArray);
    // console.log(found)
  },




  outApp(){
    sessionStorage.clear()
    this.$router.push('/Main')
  },

  },

}
</script>

<style scoped>

</style>