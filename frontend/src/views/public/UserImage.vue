<template>
  <div>


    <!-- <options-card @showModal="showModals"></options-card> -->
  
    
    <cpmUserImage @showModal="showModals" :infoData="info"></cpmUserImage>

    <b-modal id='modal1' ref="modalCardUpdate" centered title="Selecionar Imagem" hide-footer>
      <div class="d-block text-center">
        <cpmModal @modalOff='hideModals'/>
      </div>
    </b-modal>



  </div>
</template>

<script>

// import optionsCard from '../../components/options-card'
import cpmUserImage from '../../components/cpmUserImage'
import cpmModal from '../../components/cpmModalUserImage'
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
        this.$refs['modalCardUpdate'].hide();
        setTimeout( () =>{ 
           this.callImage();
        }, 1000);
        
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
    
    // optionsCard,
    cpmUserImage,
    cpmModal,
  }

}
</script>

<style scoped>

</style>