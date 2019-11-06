<template>
  <div>
    <transition-group name="cardPop" mode=””>
     <card v-for="post in posts" :key='post.id' :post ='post'/>
    </transition-group>
     <span>{{errors}}</span> <!--  apenas teste -->
  </div>
</template>

<script>
import card from '../../components/card'
import {
  axios
} from '../../main'

export default {

  name: 'home',
  data() {
    return {
      posts: null,
      errors: []
    }
  },

  components: {
    card
  },


  mounted() {

  // requisição inicial para pegar os eventos 

    axios
      .get('http://localhost:3000/api/eventall')
      .then(response => this.posts = response.data)
      .catch(e => {
      this.errors.push(e)
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
