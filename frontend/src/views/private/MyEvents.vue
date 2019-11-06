<template>
  <div>
    <h4 class="form-text text-muted">Clique no evento para modificá-lo</h4>
     
     <card @click.native='modifyEvent(post.id)' v-for="post in posts" :key='post.id' :post ='post'/>
   
     <span>{{errors}}</span> <!--  apenas teste -->
     
  </div>
</template>

<script>
import card from '../../components/card'

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
    card
  },

  methods: {

// metodo para pegar o id do evento

    modifyEvent(id){
      this.errors = id
      
    }
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
<style scoped>
.cardPop-enter {
  opacity: 0;
}

.cardPop-enter-to {
  opacity: 1;
}

.cardPop-enter-active {
  transition: all 1s ease;
}

h4 {
  margin: 20px
}

</style>