<template>
  <div class="home">
        <topBar></topBar>

    <div class="container-text-login">
      <h1>Entrar</h1>
      <p> Faça o Login com seu e-mail e senha</p>
    </div>

    <div class="row wp-cntr-1 wp-center">

      <input type="text" class="input" placeholder="e-mail">
      <input type="text" class="input" placeholder="senha">
      
        <div class="col-12 m0">
            <!-- <router-link to="/Feed">  -->
            <cButton :cData="{type:'submit', text:'Entrar',link:'feed',class:' wp-btn-1 bg-gdr-1',actionType:'Path'}"></cButton>
             <!-- </router-link> -->
        </div>
    </div>
    </div>
</template>

<script>
// @ is an alias to /src
import topBar from '@/components/topBar.vue'
import cButton from '../../components/cpmButton.vue'
// import buttons from '@/components/buttons.vue'
// import buttonZ from '@/components/button.vue'

export default {
  name: 'Login',
  components: {
    // inputs,
    topBar,
    cButton
    // buttons,
  },
  created() {},
        mounted() {

        },
        data: () => ({
          disable:{login:false , signup:true}
        }),
        methods: {
        },
        computed: {
        
        },
        watch: {}
}
</script>
