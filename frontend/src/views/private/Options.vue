<template>
  <div>
<topBar></topBar>

    <h3 class="h3 container-fluid">Opções</h3>


    <cpmOptions></cpmOptions>

    <div class="container box-info">
      <span class="media subtitle">Nome:</span>
      <input type="text" class="input mt-3 mb-3" placeholder="Pedro Henrique Lopes...">
    </div>

    <span class="media ml_4 mt-3">Email:</span>
    <input type="text" class="input mt-3 mb-3" placeholder="pedrolopeshls99@gmail.com">
    <span class="media ml_4 mt-3">User Name:</span>
    <input type="text" class="input mt-3 mb-3" placeholder="Pedro Henrique Lopes...">
    
    <optionsSearch></optionsSearch>
    <h3 class="h3 container-fluid">Preferências de eventos</h3>
    <p>Configurações de preferência de eventos:</p>

    <tags></tags>

  </div>
</template>

<script>
import cpmOptions from '../../components/cpmOptions'
import optionsSearch from '../../components/options-search'
import tags from '../../components/cpmTag'



export default {
  name: 'options',
  components: {
    cpmOptions,
    optionsSearch,
    tags,
  }

}
</script>

<style scoped>

</style>