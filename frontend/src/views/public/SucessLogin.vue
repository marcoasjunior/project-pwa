<template>
  <div class="home">
        <!-- <topBar></topBar> -->

    <div class="container-text-login">
      <br>
      <br>
      <br>
      <h1>Obrigado!</h1>
      <br>
      <br>
      <br>
      <p> Let's party!</p>
    </div>

    <div class="row wp-cntr-1 wp-center">

        <div class="col-12 m0">
            <!-- <router-link to="/Feed">  -->
            <cButton :cData="{type:'submit', text:'Entrar',link:'Feed',class:' wp-btn-1 bg-gdr-1',actionType:'Path'}"></cButton>
             <!-- </router-link> -->
        </div>
    </div>
    </div>
</template>

<script>
// @ is an alias to /src
import cButton from '../../components/cpmButton.vue'

export default {
  name: 'Login',
  components: {
    // inputs,
    // topBar,
    cButton
    // buttons,
  },
  created() {},
        mounted() {

        },
        data: () => ({
          
        }),
        methods: {
        },
        computed: {
        
        },
        watch: {}
}
</script>
