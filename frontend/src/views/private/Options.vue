<template>
  <div>
    <options-card @showModal="showModals"></options-card>

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
    
    optionsCard,
    optionsSearch,
    cardOptionsUpdate,
    tags,
  }

}
</script>

<style scoped>

</style>