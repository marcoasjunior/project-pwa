<template>
  <div>
    <topBar></topBar>

    <tag>ROCK</tag>



  </div>
</template>

<script>
import topBar from '../../components/topBar.vue'
import tag from '../../components/cpmTag.vue'



export default {
  name: 'cadastro' //this is the name of the component,  
  ,components: {
    // inputs,
    topBar,
    tag
  }
}
</script>
<style>
</style>