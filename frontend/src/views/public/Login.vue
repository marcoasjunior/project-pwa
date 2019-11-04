<template>
  <div class="home">
        <topBar></topBar>

    <div class="container-text-login">
      <h1>Entrar</h1>
      <p> Faça o Login com seu e-mail e senha</p>
    </div>

    <div class="row wp-cntr-1 wp-center">

      <input type="text" class="input mt-5" placeholder="e-mail" v-model="data.email">
      <input type="text" class="input mt-5" placeholder="senha" v-model="data.password">
      
        <div class="col-12 m0">
            <!-- <router-link to="/Feed">  -->
            <!-- <cButton :cData="{type:'submit', text:'Entrar',link:'SucessLogin',class:' wp-btn-1 bg-gdr-1',actionType:'Path'}" @click="checkUser()"></cButton> -->
            <cButton :cData="{type:'submit', text:'Entrar',class:' wp-btn-1 bg-gdr-1',actionType:'Path'}" @click="checkUser()"></cButton>
             <!-- </router-link> -->
             <!-- <span>{{ data }}</span> -->

        </div>
    </div>
    </div>
</template>

<script>
// @ is an alias to /src
import topBar from '../../components/topBar.vue'
import cButton from '../../components/cpmButton.vue'
// import buttons from '@/components/buttons.vue'
// import buttonZ from '@/components/button.vue'
import axios from 'axios'


export default {
  // name: 'Login',

  components: {
    // inputs,
    topBar,
    cButton
    // buttons,
  },
        created() {
          this.checkUser();
        },
        data: () => ({
          datas: '',
          data:{email:'',password:''},
        }),
        mounted() {}

          

            // axios.get('http://localhost:3000/api/list/user')
            //   .then(response => this.info = response.data)
            //   .catch(e => {this.datas.push(e)})
              // console.log(response.data)
      ,
        methods: {


          checkUser(){

            axios.post('http://localhost:3000/api/register/user' ,this.data, {
            email: this.data.email,
            password: this.data.password
            })
          }
        },
        computed: {
        
        },
        watch: {}
}
</script>
