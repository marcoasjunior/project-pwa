<template>
  <div>
<topBar></topBar>

<div class="container mt-5">
    <h3>Perfil</h3>
</div>

    <options-card></options-card>
    <optionsSearch></optionsSearch>

   <h3>Preferências de Eventos</h3>

    
    <div class="container box-info box-tags">
      <tags></tags>
    </div>

  </div>
</template>

<script>

import optionsSearch from '../../components/options-search'
import tags from '../../components/cpmTag'
import optionsCard from '../../components/options-card'



export default {
  name: 'options',
  components: {
    
    optionsCard,
    optionsSearch,
    tags,
  }

}
</script>

<style scoped>

</style>