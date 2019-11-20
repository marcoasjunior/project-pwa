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
      <tags></tags>
    </div>
    </div>

  </div>
</template>

<script>

import optionsSearch from '../../components/options-search'
import tags from '../../components/cpmTag'
import optionsCard from '../../components/options-card'
import cardOptionsUpdate from '../../components/cardOptionsUpdate'
import axios from 'axios'




export default {
  name: 'options',
      data() {
    return {
        info:'',
    }
  }, 
  created(){
     this.callImage()
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
      }

  },

  components: {
    
    optionsCard,
    optionsSearch,
    cardOptionsUpdate,
    tags,
  }

}
</script>

<style scoped>

</style>