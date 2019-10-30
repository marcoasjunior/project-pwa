<template>
  <div>
     <card/>
     <span>{{info}}</span>
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
      info: null
    }
  },

  components: {
    card
  },


  mounted() {

    axios
      .get('http://localhost:3000/api/user/1')
      .then(response => this.info = response.data)

  }
}

</script>
<style>
</style>