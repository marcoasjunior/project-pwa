<template>
  <div>
     <card v-for="post in posts" :key='post.id' :post ='post'/>
     <span>{{errors}}</span> <!--  apenas teste -->
     <cardUpdate> </cardUpdate>
  </div>
</template>

<script>
import card from '../../components/card'
import cardUpdate from '../../components/cardUpdate'
import {
  axios
} from '../../main'

export default {

  name: 'MyEvents',
  data() {
    return {
      posts: null,
      errors: []
    }
  },

  components: {
    card,
    cardUpdate
  },


  mounted() {

  // requisição inicial para pegar os eventos 

    axios
      .get('http://localhost:3000/api/eventall/1')
      .then(response => this.posts = response.data)
      .catch(e => {
      this.errors.push(e)
    })

  }
}

</script>
<style>
</style>