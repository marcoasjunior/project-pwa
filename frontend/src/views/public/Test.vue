<template>
  <div class="home">
      <span>{{ datas }}</span>
   </div>
</template>

<script>
// @ is an alias to /src
// import {axios} from '../../main'
import axios from 'axios'

// import { http } from '../../main'

export default {
    name: 'test',
    
    components: {},

    created() {
        this.getData();
    },

    mounted() {

    },
    methods: {

        getData(){

        axios.get('http://localhost:3000/api/list/user')
        .then(response => this.datas = response)
        // .catch(e => {
            // this.errors.push(e)
        // })
        }
    },
    computed: {},
    watch: {}
}
</script>
