<template>
  <div class="mt-7 card shadow rounded">


    <!-- <options-card @showModal="showModals"></options-card> -->


    
    <cpmUserImage @showModal="showModals" :infoData="info"></cpmUserImage>

    <b-modal id='modal1' ref="modalCardUpdate" centered title="Selecionar Imagem" hide-footer>
      <div class="d-block text-center">
        <cpmModal @modalOff='hideModals'/>
      </div>
    </b-modal>

          <button type="submit" class="btn btn-primary" @click="confirmData()" :disabled="!info.picture"> Confirma</button>


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
          // eslint-disable-next-line no-console
        console.log("antes")
        setTimeout( () =>{ 
          this.callImage();
          // eslint-disable-next-line no-console
        console.log("dentro")
        }, 2000);
        
      },
      callImage(){

        axios.get(`https://weparty-app.herokuapp.com/api/user/${sessionStorage.getItem('id')}`)
        .then(response =>{
          this.info = response.data
        }).catch(e => {
          alert(e)
        })
      },
      confirmData(){
        this.$router.push('/Feed')
    },
    

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