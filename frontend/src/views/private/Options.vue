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
     <tag class="mt-5" :tagsData="{data:tagData}" @setTags="selecTags"></tag>
    <b-button class="mt-5 outline-primary button-return ac btn-s" variant="primary" @click="SetPreference()">Selecionar preferências</b-button>
    </div>

    </div>

  </div>
</template>

<script>

import optionsSearch from '../../components/options-search'
import tag from '../../components/cpmTag'
import optionsCard from '../../components/options-card'
import cardOptionsUpdate from '../../components/cardOptionsUpdate'
import axios from 'axios'




export default {
  name: 'options',
      data() {
    return {
        info:'',
        tagData:'',
        data:{UserId:'', PreferenceId:''},
        tagsSelected:'',
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
        axios.get(`http://localhost:3000/api/user/${sessionStorage.getItem('id')}`)
        .then(response =>{
                this.info = response.data
        }).catch(e => {
          alert(e)
        })
      },
      getTags(){
      axios.get('http://localhost:3000/api/tags/preferences')
      .then( (response) => {
      this.tagData = response.data;
    })
    },
      selecTags(param){
        // alert()
      //console.log("ha")
      /* eslint-disable no-console */
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
      .then( (response) => {
        // this.tagData = response.data
        console.log(response)
      })

      // console.log(this.data.PreferenceId)
      console.log(item)
      }
      
  },

  },

  components: {
    
    optionsCard,
    optionsSearch,
    cardOptionsUpdate,
    tag,
  }

}
</script>

<style scoped>

</style>