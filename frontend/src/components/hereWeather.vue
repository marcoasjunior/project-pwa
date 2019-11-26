<template>
    <div class="weather">
     
    </div>
</template>

<script>

export default {
    name: "hereWeather",
    props: {
        coord: Object,
        date:
    },

    data() {
        return {
            map: `https://image.maps.api.here.com/mia/1.6/mapview?app_id=g4qzn6OUOLYfn2OFO6Z8&app_code=pAi1rwxOkCnBaQHm4CbURg&ta=45&pip&w=300&h=400&sb=mk&z=16&t=2&u=200&lat=${this.coord.Latitude}&lon=${this.coord.Longitude}`,
            errors: null
        }
    },

}



</script>

<style scoped>

img {
    height: 20%;
}


</style>