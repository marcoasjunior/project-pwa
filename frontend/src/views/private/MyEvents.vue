<template>
  <div>
    <h4 class="form-text text-muted">Clique no evento para modificá-lo</h4>
    <transition-group name="cardPop" mode=””>
      <card @click.native='showModal(post)' v-for="post in posts" :key='post.id' :post='post' />
    </transition-group>
    <b-modal id='modal1' ref="modalCardUpdate" centered title="Modificar Evento" hide-footer>
      <div class="d-block text-center">
        <cardUpdate :post='passProps' @modalOff="hideModal" />
      </div>
    </b-modal>
    <span>{{errors}}</span> <!--  apenas teste -->
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
      errors: [],
      passProps: null
    }
  },

  components: {
    card,
    cardUpdate
  },

  methods: {

// metodo para pegar o id do evento

    // modifyEvent(id){
    //   this.errors = id
      
    
      showModal(id) {
        this.$refs['modalCardUpdate'].show()
        this.passProps = id
      },

      hideModal() {
        this.$refs['modalCardUpdate'].hide()
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