<template>
    <div class="here-map">
        <canvas ref="map" >{{map}}</canvas>
    </div>
</template>

<script>
import { axios } from '../main'

export default {
    name: "HereMap",
    props: {
        coord: Object
    },

    data() {
        return {
            map: null,
            errors: null
        }
    },

    methods: {

        callMap() {
            axios
                .get(`https://image.maps.api.here.com/mia/1.6/mapview?app_id=g4qzn6OUOLYfn2OFO6Z8&app_code=pAi1rwxOkCnBaQHm4CbURg&lat=${this.coord.lat}&lon=${this.coord.lon}&vt=0&z=14`)
                .then(response => {
                    this.map = response
                })

        }
    }
}



</script>