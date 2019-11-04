<template>
  <div class="home">
        <topBar></topBar>

    <div class="container-text-login">
      <h1>Cadastrar</h1>
      <p> Faça o cadastro com seu e-mail e senha</p>


      <span>{{ data }} </span>
    </div>


    <input type="email" class="input mt-5" placeholder="e-mail" id="email" v-model="data.email" @keyup="callValidation()">
    <input type="password" class="input mt-5" placeholder="senha"  v-model="data.password" @keyup="callValidation()">
    <input type="password" class="input mt-5" placeholder="senha"  v-model="data.passwordConfirm" @keyup="callValidation()">

    <br>
    {{error}}
    <br>
    <!-- {{dataValid}} -->

 

    <div class="wp-checkbox">
        <input type="checkbox" v-model="dataValid.chekBox" @click="getStatusCheckBox()"> Concordo com os termos e Condições
    </div>

        <div class="col-12 m0">
          <span @click="getInfoInputs()">
             <cButton :cData="{type:'submit', text:'Cadastrar',link:'feed',class:'wp-btn-1 bg-gdr-1'}" ></cButton>
          </span>
        </div>



    </div>
</template>

<script>
// @ is an alias to /src
import cButton from '../../components/cpmButton.vue'
import topBar from '../../components/topBar.vue'
import axios from 'axios'


export default {
  name: 'Login',

  components: {
    cButton,
    topBar
  },
  created() {},
        mounted() {

        },
        data: () => ({
          disable:{login:false , signup:true},
          data:{email:'',password:'',passwordConfirm:''},
          formValid: false,
          dataValid:{email:false,password:false,passwordConfirm:false,chekBox:''},
          error: '',
        }),
        methods: {
          getInfoInputs(){
            axios.post('http://localhost:3000/api/register/user' ,this.data, {
            email: this.data.email,
            password: this.data.password,
            passwordConfirm: this.data.passwordConfirm
            })
          },
          getStatusCheckBox(){
            // this.dataValid.chekBox = true;
            if(this.dataValid.chekBox == true){
              // alert("box não selecionada")
              } 
            
            if(this.dataValid.chekBox == false){
              // alert("check box selecionada")
              }
          },


          callValidation(){
              this.formValid = true;
              if(this.formValid){
              this.formValid = this.checkEmailValid();
              }
              if(this.formValid){
              this.formValid = this.checkPasswordValid();
              }
              if(this.formValid){
      
                this.formValid = this.checkPasswordConfirm();
              }
              if(this.formValid){
                this.error = '';
              }

          },

          checkEmailValid(){


            var re = /^(([^<>()\\\\.,;:\s@"]+(\.[^<>()\\\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            let bah = re.test(this.data.email);
            // eslint-disable-next-line no-console
            console.log('duhsdushdu' + bah)

            if(!this.data.email){
              return true
            }
            else if(this.data.email.length < 3){
              this.error.data.email = "Email is not valid";
              return false
       
            }else{
              return true
            }

          },

          checkPasswordValid(){
              if(this.data.password.length < 1 || !this.data.password){
                this.error = "Password too short";
                return false
              }else{
                return true
              }
          },
          checkPasswordConfirm(){

            if(this.data.password != this.data.passwordConfirm){
              this.error = "password does not match";
                return false
            }else{
              return true;
            }
          },


          // checkEmailValidKeyup(){
          //   if(this.data.email == ''){
          //     this.dataValid.email = false;
          //   }else{
          //        this.dataValid.email = true;
          //   }
          // },

          // checkValidinputandstuff(){
          //   if( this.dataValid.email && this.dataValid.passwordConfirm){
          //     this.callAPIfunction();
          //   }else{
          //     this.showError();
          //   }
          // }




      },
       computed: {
        
        },
        watch: {}
}
</script>
