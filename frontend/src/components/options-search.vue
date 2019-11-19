<template>
  <div class='card shadow rounded'>
    <label for="range-1">Raio de procura</label>
    <b-form-input id="range-1" v-model="kilom" type="range" min="1" max="50"></b-form-input>
    <div class="mt-2">Distância: {{ kilom }}km</div>

    <radiusMap v-if="coord.latitude != undefined" :coord='coord'> </radiusMap>

  </div>
</template>

<script>
import radiusMap from './radiusMap'
export default {

    name: 'options-search',

 data() {
      return {
        kilom: '10',
        coord: {
          latitude: sessionStorage.latitude,
          longitude: sessionStorage.longitude
      }}
    },
    components: {
    radiusMap
},
    computed: {
      
    },


}
</script>

