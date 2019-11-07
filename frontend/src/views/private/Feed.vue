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
      show: false
    }
  },

  components: {
    card,
    fakeCard
  },


  mounted() {

  // requisição inicial para pegar os eventos 

    axios
      .get('http://localhost:3000/api/eventall')
      .then(response => this.posts = response.data)
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
