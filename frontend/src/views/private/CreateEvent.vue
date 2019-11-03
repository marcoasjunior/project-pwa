<template>
  <div>

      <button class="upload-image-event">Carrege a imagem</button>

      <div class="align-self-end mt-7 box-info">
        <p>Adicione o local do evento:</p>
        <input type="text" class="input" placeholder="Local do Evento:">

        <!-- deve imprimir mais informações sobre o local do evento -->
      </div>

      <div class="col-6 mt-7">
        <p>Adicionar tag:</p>
      </div>
        
        <div class="container box-info box-tags">
          <tag></tag>
        </div>



  </div>
</template>

<script>

import tag from '../../components/cpmTag.vue'



export default {
  name: 'cadastro' //this is the name of the component,  
  ,components: {
    // inputs,
    tag
  }
}
</script>
<style>
</style>