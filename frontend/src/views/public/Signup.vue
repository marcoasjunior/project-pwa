<template>
  <div class="home">
        <topBar></topBar>

    <div class="container-text-login">
      <h1>Cadastrar</h1>
      <p> Faça o cadastro com seu e-mail e senha</p>
    </div>

    <input type="text" class="input" placeholder="e-mail">
    <input type="text" class="input" placeholder="senha">
    <input type="text" class="input" placeholder="senha">

    <div class="wp-checkbox">
        <input type="checkbox" name="" id=""> Concordo com os termos e Condições
    </div>

        <div class="col-12 m0">
            <cButton :cData="{type:'submit', text:'Cadastrar',link:'feed',class:' wp-btn-1 bg-gdr-1'}"></cButton>
        </div>



    </div>
</template>

<script>
// @ is an alias to /src
// import cpmSignup from '@/components/cpmSignup.vue'
import cButton from '../../components/cpmButton.vue'
import topBar from '../../components/topBar.vue'
// import buttons from '@/components/buttons.vue'
// import buttonZ from '@/components/button.vue'

export default {
  name: 'Login',
  components: {
    cButton,
    topBar
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
