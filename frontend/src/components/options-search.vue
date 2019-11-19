<template>
  <div class='card shadow rounded'>
    <label for="range-1">Raio de procura</label>
    <b-form-input id="range-1" v-model="kilom" type="range" min="1000" max="50000" number></b-form-input>
    <div class="mt-2">Distância: {{kilom | kilomReduce}}km</div>

    <radiusMap v-if="coord.latitude != undefined" :coord='coord' :radius='kilom'> </radiusMap>

  </div>
</template>

<script>
import radiusMap from './radiusMap'
export default {

    name: 'options-search',

 data() {
      return {
        kilom: '1000',
        coord: {
          latitude: sessionStorage.latitude,
          longitude: sessionStorage.longitude
      },
      
      }
    },
    components: {
    radiusMap
},
    filters: {

      kilomReduce(value) {
        
        return (value / 1000).toFixed(0)
      }
    },    


}
</script>

