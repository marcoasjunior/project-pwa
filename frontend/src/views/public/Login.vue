<template>
  <div class="home">
        <topBar></topBar>

    <div class="container-text-login">
      <h1>Entrar</h1>
      <p> Faça o Login com seu e-mail e senha</p>
    </div>

    <div class="row wp-cntr-1 wp-center">

      <input type="text" class="input mt-5" placeholder="e-mail">
      <input type="text" class="input mt-5" placeholder="senha">
      
        <div class="col-12 m0">
            <!-- <router-link to="/Feed">  -->
            <!-- <cButton :cData="{type:'submit', text:'Entrar',link:'SucessLogin',class:' wp-btn-1 bg-gdr-1',actionType:'Path'}" @click="checkUser()"></cButton> -->
            <cButton :cData="{type:'submit', text:'Entrar',class:' wp-btn-1 bg-gdr-1',actionType:'Path'}" @click="checkUser()"></cButton>
             <!-- </router-link> -->
             <span>{{ datas }}</span>
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
import {axios} from '../../main'

export default {
  name: 'Login',
  data() {
    return {
      info: null,
      datas: []
    }
  },
  components: {
    // inputs,
    topBar,
    cButton
    // buttons,
  },
  created() {},
        mounted() {

            axios.get('http://localhost:3000/api/list/user')
              .then(response => this.info = response.data)
              .catch(e => {this.datas.push(e)})
              // console.log(response.data)
        },
        // data: () => ({
        // }),
        methods: {

          checkUser(){

            alert("ok")
            // console.log("ok")
          }

        },
        computed: {
        
        },
        watch: {}
}
</script>
