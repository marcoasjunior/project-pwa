<template>
  <div>
     <card event ='' local ='' kilo ='' date ='' image =''/>
     <span>{{errors}}</span>
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

    axios
      .get('http://localhost:3000/api/user/1')
      .then(response => this.info = response.data)
      .catch(e => {
      this.errors.push(e)
    })

  }
}

</script>
<style>
</style>