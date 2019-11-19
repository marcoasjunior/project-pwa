<template>
    <div class="here-map">
        <b-img fluid ref="map" :src="map" id="mapContainer"></b-img>
    </div>
</template>

<script>

export default {
    name: "radiusMap",
    props: {
        coord: Object
    },

    data() {
        return {
            
            map: `https://image.maps.api.here.com/mia/1.6/region?app_id=g4qzn6OUOLYfn2OFO6Z8&app_code=pAi1rwxOkCnBaQHm4CbURg&a=${this.coord.latitude},${this.coord.longitude}&t=0&z=13&w=600&h=350&rad=1000&sb=mk`

        }
    },

}



</script>

<style scoped>

img {
    height: 20%;
}


</style>