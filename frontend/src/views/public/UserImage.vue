<template>
  <div>


    <!-- <options-card @showModal="showModals"></options-card> -->
    
    
    <cpmUserImage @showModal="showModals"></cpmUserImage>

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




export default {
  name: 'options',

  methods: {

    showModals() {
        this.$refs['modalCardUpdate'].show()
      },

       hideModals() {
        this.$refs['modalCardUpdate'].hide()
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