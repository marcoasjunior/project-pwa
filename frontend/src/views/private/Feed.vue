<template>
  <div>
    <transition-group name="cardPop" mode=””>
     <card v-for="post in posts" :key='post.id' :post ='post'/>
    </transition-group>
    <fakeCard v-show="show" />
  </div>
</template>

<script>
import card from '../../components/card'
import fakeCard from '../../components/fakeCard'
import {
  axios
} from '../../main'

export default {

  name: 'home',
  data() {
    return {
      posts: null,
      errors: [],
      show: false,
      location:null,
      gettingLocation: false,
      errorStr:null
    }
  },

  components: {
    card,
    fakeCard
  },

   created() {
    //do we support geolocation
    if(!("geolocation" in navigator)) {
      this.errorStr = 'Geolocation is not available.';
      return;
    }

    this.gettingLocation = true;
    // get position
    navigator.geolocation.getCurrentPosition(pos => {
      this.gettingLocation = false
      this.location = pos
      sessionStorage.latidude = pos.coords.latitude
      sessionStorage.longitude = pos.coords.longitude

    }, err => {
      this.gettingLocation = false;
      this.errorStr = err.message;
    })
  },

  mounted() {

  // requisição inicial para pegar os eventos 

    axios
      .get('http://localhost:3000/api/eventall')
      .then(response => {
        this.posts = response.data
      })
      .catch(e => {
      this.errors.push(e)
      this.show = true
    })

  }
}

</script>
<style>

.cardPop-enter {
  opacity: 0;
}

.cardPop-enter-to {
  opacity: 1;
}

.cardPop-enter-active {
  transition: all 1s ease;
}


</style>
