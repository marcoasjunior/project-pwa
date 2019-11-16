<template>
  <div class="home">
    <topBar></topBar>

    <div class="container-text-login">
      <h1>Entrar</h1>
      <p> Faça o Login com seu e-mail e senha</p>
    </div>

    <div class="row wp-cntr-1 wp-center">

      <b-form-input class="mt-5 mb-3" v-model="data.email" required placeholder="e-mail"></b-form-input>
      <b-form-input type="password" class="mt-5 mb-3" v-model="data.password" required placeholder="e-mail"></b-form-input>


      <div class="col-12 m0">
        <!-- <router-link to="/Feed">  -->
        <!-- <cButton :cData="{type:'submit', text:'Entrar',link:'SucessLogin',class:' wp-btn-1 bg-gdr-1',actionType:'Path'}" @click="checkUser()"></cButton> -->
        <span @click="login()">
          <cButton :cData="{type:'submit', text:'Entrar',class:' wp-btn-1 bg-gdr-1',actionType:'Path'}"></cButton>
        </span>
        <!-- </router-link> -->

        <!-- <span>{{ info.data.email }}</span> -->

      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import topBar from '../../components/topBar.vue'
import cButton from '../../components/cpmButton.vue'
import axios from 'axios'


export default {
  // name: 'Login',

  components: {
    topBar,
    cButton
  },
  created() {
    // this.checkUser();
  },
  data: () => ({
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
        this.$router.push('/SucessLogin')

      } else if (response.data == 'user_not_valid') {
        // eslint-disable-next-line no-console
        alert('deu ruim na senha no no email')
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
