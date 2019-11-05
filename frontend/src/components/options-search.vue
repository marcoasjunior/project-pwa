<template>
  <div class="card shadow rounded">

    <br>
    <h3 id="emailHelp" class="form-text text-muted">Raio de procura</h3>
    <input class="" type="range" min="1" max="100" value="25" tabindex="0">
    <br>

  </div>
</template>

<script>
export default {
    name: 'options-search'
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