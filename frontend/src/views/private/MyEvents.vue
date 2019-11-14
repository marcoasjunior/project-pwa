<template>
  <div>

    <b-alert :show="dismissCountDown" dismissible fade variant="info" @dismiss-count-down="countDownChanged">
      Clique no evento para modificá-lo
    </b-alert>
    <fakeCard v-show="show" />
    <transition-group name="cardPop" mode=””>
      <card @click.native='showModal(post)' v-for="post in posts" :key='post.id' :post='post' />
    </transition-group>
    <b-modal id='modal1' ref="modalCardUpdate" centered title="Modificar Evento" hide-footer>
      <div class="d-block text-center">
        <cardUpdate :post='passProps' @modalOff="hideModal" />
      </div>
    </b-modal>

  </div>
</template>

<script>
import card from '../../components/card'
import cardUpdate from '../../components/cardUpdate'
import fakeCard from '../../components/fakeCard'

import {
  axios
} from '../../main'

export default {

  name: 'MyEvents',
  data() {
    return {
      posts: null,
      errors: [],
      passProps: null,
      show: false,
      dismissSecs: 8,
      dismissCountDown: 8,
      showDismissibleAlert: false
    }
  },

  components: {
    card,
    cardUpdate,
    fakeCard
  },

  methods: {
 
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
      .get(`http://localhost:3000/api/eventall/${sessionStorage.getItem('id')}`)
      .then(response => this.posts = response.data)
      .catch(e => {
      this.errors.push(e)
      this.show = true
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