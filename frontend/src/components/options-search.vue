<template>
  <div class='card shadow rounded'>
    <label for="range-1">Raio de procura</label>
    <b-form-input id="range-1" v-model="value" type="range" min="1" max="50"></b-form-input>
    <div class="mt-2">Distância: {{ value }}km</div>
  </div>
</template>

<script>
export default {
    name: 'options-search',
 data() {
      return {
        value: '10'
      }
    }
}
</script>

<style scoped>

.card {
  margin-top: 1%;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  margin-bottom: 3%
  
}

</style>