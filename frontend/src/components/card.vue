<template>
  <div class="card shadow rounded">
    <img class="card-img-top" :src="post.picture">
    <div class="card-body">
      <h4 class="card-title">{{post.name}}</h4>
      <hr>
      <p class="card-text"> <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt"
          role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
          class="svg-inline--fa fa-map-marker-alt fa-w-12 fa-3x">
          <path fill="currentColor"
            d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
            class=""></path>
        </svg> {{post.local}}</p>
      <p class="card-text"><small class="text-muted"> Postado em {{post.edate}}</small></p>
    </div>
  </div>
</template>

<script>

export default {
    
  props: {
    post: Object
  },
  data() {
    return {
  }}}

</script>

<style scoped>
.card {
  margin-top: 1%;
  margin-left: auto;
  margin-right: auto;
  width: 90%
}
svg {
  width: 20px;
  height: 20px;
}
</style>