<template>
  <div class="home">

<topBar></topBar>

<div class="card shadow rounded mb-3 mt-5">

<div v-if="step == 1">

    <div class="container-text-login">
      <h1>Entrar</h1>
      <p> Faça o Login com seu e-mail e senha</p>
    </div>

    <div class="row wp-cntr-1 wp-center">

      <b-form-input class="mt-5 mb-3" v-model="data.email" required placeholder="e-mail"></b-form-input>
      <b-form-input type="password" class="mt-5 mb-3" v-model="data.password" required placeholder="senha"></b-form-input>


        <!-- <router-link to="/Feed">  -->
        <!-- <cButton :cData="{type:'submit', text:'Entrar',link:'SucessLogin',class:' wp-btn-1 bg-gdr-1',actionType:'Path'}" @click="checkUser()"></cButton> -->
        <!-- <span> -->
          <!-- <cButton :cData="{type:'submit', text:'Entrar',class:' wp-btn-1 bg-gdr-1',actionType:'Path'}" @click="nextStep()"></cButton> -->
            <!-- <button @click="login()">next</button>        
        </span> -->
        <!-- </router-link> -->

            </div>

        <div class="container-buttons ac mt-5">

        <router-link to="/Main" class="in-button-l">
          <b-button variant="outline-primary button-return">Voltar</b-button>
        </router-link>


        <span @click="login()" class="in-button-r">
          <b-button variant="outline-primary button-return bg-gdr-1 ac btn-s">Entrar</b-button>
        </span>

        </div>


        <!-- <span>{{ info.data.email }}</span> -->

</div>

<!-- {{step}} -->
<div v-if="step == 2">
  <cpmSucess></cpmSucess>
</div>
  
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import cButton from '../../components/cpmButton.vue'
import cpmSucess from '../../components/cpmSucess.vue'
import topBar from '../../components/topBar.vue'
import axios from 'axios'


export default {
  // name: 'Login',

  components: {
    cpmSucess,
    topBar
    // cButton
  },
  created() {
    // this.checkUser();
  },
  data: () => ({
    step:1,
    datas: '',
    data: {
      email: '',
      password: '',
    },
    info: ''
  }),
  mounted() {}



  // axios.get('http://localhost:3000/api/list/user')
  //   .then(response => this.info = response.data)
  //   .catch(e => {this.datas.push(e)})
  // console.log(response.data)
  ,
  methods: {

      nextStep(){
         /* eslint-disable no-console */
      // console.log(resp)
      this.step ++;
    },


    login() {

      axios.post('http://localhost:3000/api/login/user', this.data, {
        email: this.data.email,
        password: this.data.password,
        // password: this.data.password,
        // passwordConfirm: this.data.passwordConfirm

      }).then(response => (this.checkUser(response)))

      // this.checkUser(response)
    },

    checkUser(response) {

      if (response.data.email == this.data.email) {
        // eslint-disable-next-line no-console
        console.log('deu boa')
        sessionStorage.id = response.data.id;
        // this.$router.push('/SucessLogin')
        this.step = 2

      } else if (response.data == 'user_not_valid') {
        // eslint-disable-next-line no-console
        alert('deu ruim na senha ou no email')
      } else {
        // eslint-disable-next-line no-console
        console.log('user invalid')
      }
    }

  },
  computed: {

  },
  watch: {}
}
</script>
