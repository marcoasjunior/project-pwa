<template>
  <div class="home">

<topBar></topBar>

<div class="card shadow rounded mb-3 mt-5">

<div v-if="step == 1">

    <div class="container-text-login">

      {{url}}
      <h1>Entrar</h1>
      <p> Faça o Login com seu e-mail e senha</p>
    </div>

    <div class="row wp-cntr-1 wp-center">

      <b-form-input class="mt-5 mb-3" v-model="data.email" required placeholder="e-mail"></b-form-input>
      <b-form-input type="password" class="mt-5 mb-3" v-model="data.password" required placeholder="senha"></b-form-input>

            </div>

        <div class="container-buttons ac mt-5">

        <router-link to="/Main" class="in-button-l">
          <b-button variant="outline-primary button-return btn-lg">Voltar</b-button>
        </router-link>


        <span @click="login()" class="in-button-r">

          <b-button pill variant="outline-secondary btn btn-lg wp-btn-main button-main">Entrar</b-button>

        </span>

        </div>

</div>


<div v-if="step == 2">
  <cpmSucess></cpmSucess>
</div>
  
  </div>
  </div>
</template>

<script>

import cpmSucess from '../../components/cpmSucess.vue'
import topBar from '../../components/topBar.vue'
import axios from 'axios'


export default {


  components: {
    cpmSucess,
    topBar

  },
  created() {

    this.variable()
  },
  data: () => ({
    url: process.env.VUE_APP_LOCAL_API,
    step:1,
    datas: '',
    data: {
      email: '',
      password: '',
    },
    info: ''
  }),
  mounted() {
    
  }
  ,
  methods: {

    variable(){
      /* eslint-disable no-console */
      console.log(process.env.VUE_APP_LOCAL_API)
    },

      nextStep(){
      // console.log(resp)
      this.step ++;
    },


    login() {

      axios.post('https://weparty-app.herokuapp.com/api/login/user', this.data, {
        email: this.data.email,
        password: this.data.password,

      }).then(response => (this.checkUser(response)))
    },

    checkUser(response) {

      if (response.data.email == this.data.email) {
        // eslint-disable-next-line no-console
        console.log('deu boa')
        sessionStorage.id = response.data.id;
        this.step = 2

      } else if (response.data == 'user_not_valid') {
        // eslint-disable-next-line no-console
        alert('Autenticação inválida')
      } else {
        // eslint-disable-next-line no-console
        console.log('User invalid')
      }
    }

  },
  computed: {

  },
  watch: {}
}
</script>
