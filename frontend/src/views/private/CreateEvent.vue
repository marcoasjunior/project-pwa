<template>
  <div>

    <b-alert :show="dismissCountDown" dismissible fade variant="info" @dismiss-count-down="countDownChanged">
      Crie um novo evento abaixo
    </b-alert>

    <marcoPolo></marcoPolo>

    <div class="col-6 mt-7">
      <p>Adicionar tag:</p>
    </div>

    <div class="container box-info box-tags">
      <tag></tag>
    </div>



  </div>

</template>

<script>
import axios from 'axios';
import tag from '../../components/cpmTag.vue'
import marcoPolo from '../../components/cpmCreateEvent.vue'



export default {
    name: 'cadastro',

    components: {
      tag,
      marcoPolo
    },

    created() {
      // this.checkUser();
    },
    data: () => ({
      datas: '',
      data: {
        email: '',
        password: ''
      },
      info: '',
      dismissSecs: 8,
      dismissCountDown: 8,
      showDismissibleAlert: false
    }),
    mounted() {

      axios.get('http://localhost:3000/api/tags/preferences')
        .then(response => this.data = response.data);

    },
    methods: {

    },
    computed: {

    },
    watch: {}

}
</script>
<style>
</style>