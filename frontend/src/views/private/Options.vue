<template>
  <div>
<topBar></topBar>

<div class="container mt-5">
    <h3>Perfil</h3>
</div>


    <cpmOptions></cpmOptions>

    <div class="box-info">
      <p class="media subtitle">Nome:</p>
      <input type="text" class="input mt-3 mb-3" placeholder="Pedro Henrique Lopes...">
    </div>

    <div class="container box-info">
      <p class="media subtitle">Email:</p>
      <input type="text" class="input mt-3 mb-3" placeholder="pedrolopeshls99@gmail.com">
    </div>
    
    <div class="container box-info">
      <p class="media subtitle">User Name:</p>
      <input type="text" class="input mt-3 mb-3" placeholder="Pedro Henrique Lopes...">
    </div>
    

    <optionsSearch></optionsSearch>

   <h3>Preferências de Eventos</h3>

    
    <div class="container box-info box-tags">
      <tags></tags>
    </div>

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