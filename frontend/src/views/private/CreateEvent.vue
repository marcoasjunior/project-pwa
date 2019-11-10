<template>
  <div>

      <!-- <button type="upload" class="upload-image-event">Carrege a imagem</button> -->

<card></card>



        <input type="file" class="upload" required capture accept="image/*,.pdf">
        <span class="ac upload-image-event" for="file"></span>

      <div class="align-self-end mt-7 box-info">
        <p>Adicione o local do evento:</p>

        <input type="text" class="input" placeholder="nome do Evento:">
        <input type="text" class="input" placeholder="Local do Evento:">
        <input type="date" class="input" placeholder="data do Evento:">
        <input type="text" class="input" placeholder="endereço do Evento:">
        <input type="text" class="input" placeholder="Evento criado por:">

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
import card from '../../components/cpmCard.vue'



export default {
  name: 'cadastro' //this is the name of the component,  
  ,components: {
    // inputs,
    tag,
    card
  }
}
</script>
<style>
</style>