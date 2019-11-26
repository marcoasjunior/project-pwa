<template>
    <div class="weather">
        <div>
            Tempo agora
    <b-img :src="`http://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png`" fluid alt="Responsive image"></b-img>
      <p>Temperatura:</p> {{ weatherInfo.main.temp }}°C
    </div>
     
    </div>
</template>

<script>
import {axios} from '../main'

export default {
    name: "hereWeather",
    props: {
        coord: Object,
    },

    data() {
        return {
            weatherInfo: null,
            errors: null
        }
    },

    mounted() {
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.coord.Latitude}&lon=${this.coord.Longitude}&appid=60602d68e77995c47c5a64c8c0944e0b&lang=pt&units=metric`)
            .then(response => (this.weatherInfo = response.data))
  }
}



</script>

<style scoped>

img {
    height: 20%;
}


</style>

