<template>
  <div>
      <span>{{info}}</span> <!--  apenas teste -->
     <card event ='' local ='' kilo ='' date ='' image =''/>
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
      info: null,
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
      .then(response => this.info = response.data)
      .catch(e => {
      this.errors.push(e)
    })

  }
}

</script>
<style>
</style>