<template>
  <div class="card shadow rounded" style="width: 30rem;">
    <img class="card-img-top" :src=vImage>
    <div class="card-body">
      <h4 class="card-title">{{event}}</h4>
      <hr>
      <!-- Text -->
      <p class="card-text"> Local: {{local}}</p>
      <p class="card-text"><small class="text-muted"> Postado no dia {{date}}</small></p>
    </div>

  </div>
</template>

<script>

export default {
    
  props: ['event', 'local', 'date', 'image'],
  data() {
    return {
      vImage: this.image
      
  }}}

</script>

<style scoped>
.card {
  margin-top: 1%;
  margin-left: auto;
  margin-right: auto
}
</style>