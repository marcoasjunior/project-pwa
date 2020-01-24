<template>
  <div class="home">
        <topBar></topBar>
  <b-alert
      :show="dismissCountDown"
      dismissible
      variant="warning"
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="countDownChanged"
    >
      Esse email já possui cadastro em nosso site, faça login para acessar o site
      
       <!-- {{ dismissCountDown }} -->
    </b-alert>



<div class="card shadow rounded mb-3">



    <div class="container-text-login">
      <h1>Cadastrar</h1>
      <p> Faça o cadastro com seu e-mail e senha</p>

      <!-- <span>{{ data }} </span> -->
    </div>

        <div class="container-inputs ac">
          <p class="sub-title">Nome:</p>
            <b-form-input class="input-bv ac" v-model="data.name" id="input-live" :class="'input-' + this.dataValid.name" placeholder="Nome" @keyup="checkNameValid()"></b-form-input>
              <div class="warningContainer">
                <p v-if="this.dataValid.name==false" class="warning">preencha com nome e sobrenome!</p>
              </div>
        </div>

        <div class="container-inputs ac">
          <p class="sub-title">Email:</p>
            <b-form-input class="input-bv ac" v-model="data.email" id="input-live" :class="'input-' + this.dataValid.email" placeholder="email" @keyup="checkEmailValid()"></b-form-input>
              <div class="warningContainer">
                <p v-if="this.dataValid.email==false" class="warning">preencha com um email válido!</p>
              </div>
        </div>
        
        <div class="container-inputs ac">
          <p class="sub-title">Senha:</p>
          <b-form-input class="input-bv ac" v-model="data.password" id="input-live" :class="'input-' + this.dataValid.password" placeholder="Senha" @keyup="checkPasswordValid()"></b-form-input>
          <div class="warningContainer">
            <p v-if="this.dataValid.password==false" class="warning">Senha deve possuir no mínimo 8 digitos!</p>
          </div>
        </div>

        <div class="container-inputs ac">
          <p class="sub-title">Confirmação de Senha:</p>
          <b-form-input class="input-bv ac" v-model="data.passwordConfirm" id="input-live" :class="'input-' + this.dataValid.passwordConfirm" placeholder="Confirmação da senha" @keyup="checkPasswordConfirm()"></b-form-input>
          <div class="warningContainer">
            <p v-if="this.dataValid.passwordConfirm==false" class="warning">As senhas não estão iguais!</p>
          </div>
        </div>
    <br>
    <!-- {{error}} -->
    <br>



        <div class="container-buttons ac">

        <router-link to="/Main">
          <b-button variant="outline-primary button-return btn-lg">Voltar</b-button>
        </router-link>


        <span @click="getInfoInputs()">
          <b-button pill variant="outline-secondary btn btn-lg wp-btn-main button-main">Cadastrar</b-button>
        </span>

        </div>

     
</div>



    </div>
</template>

<script>
// @ is an alias to /src
import topBar from '../../components/topBar.vue'
import axios from 'axios'


export default {
  name: 'Login',

  components: {
    // cButton,
    topBar
  },
  created() {},
        mounted() {

        },
        data: () => ({
          dismissSecs: 5,
          dismissCountDown: 0,
          disable:{login:false , signup:true},
          data:{email:'',password:'',passwordConfirm:'', file:''},
          formValid: false,
          dataValid:{name:null,email:null,password:null,passwordConfirm:null,chekBox:''},
          error: '',
          warningName:'',
          info:null,

          // info: {picture:''},
          // picture:'',
          warning:'',
          warningPassword:'',
          warningPasswordConfirm:'',
          warningShow: false,
        }),
        methods: {

        onFileChange(e) {
            const file = e.target.files[0];
            this.url = URL.createObjectURL(file);
            this.data.file = file
          /* eslint-disable no-console */
        },
          
          getInfoInputs(){
            axios.post('http://localhost:3000/api/register/user' ,this.data, {
            // axios.post('https://weparty-app.herokuapp.com/api/register/user' ,this.data, {
            name: this.data.name,
            email: this.data.email,
            picture: this.data.file,
            password: this.data.password,
            passwordConfirm: this.data.passwordConfirm
            }).then(response => ( this.checkRegister(response) ))
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
              this.formValid = this.checkNameValid();
              }
              

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

          checkRegister(response){
            if(response.data == "email_alredy_exist"){

            this.showAlert()
            console.log(response)
              
            }else{
              this.$router.push('/UserImage')
              sessionStorage.id = response.data.id;
            // eslint-disable-next-line no-console
            console.log(response)
            }
          },
          countDownChanged(dismissCountDown) {
            this.dismissCountDown = dismissCountDown
          },
          showAlert() {
            this.dismissCountDown = this.dismissSecs
          },

          checkNameValid(){
            if(this.data.name.length < 5){
                this.warningName = "Nome inválido";
                this.dataValid.name=false
                return false

              }else{
                this.warningName = "";
                this.dataValid.name=true
                return true
              }
          },

          checkEmailValid(){


            var re = /^(([^<>()\\\\.,;:\s@"]+(\.[^<>()\\\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            let bah = re.test(this.data.email);
            console.log('duhsdushdu' + bah)



            if(!bah){
              this.warning = "Email Inválido";
              this.dataValid.email=false
              // this.warningShow = true;
              
              // console.log(this.warningShow)
              // console.log('Email está incorreto!')
              return true
            } 
            if(bah){
              this.warning = "";
            }

            if(bah.length < 10){
              // this.warning = "Email não é válido";
              this.dataValid.email=false

            // eslint-disable-next-line no-console

              return false
       
            }else{
              this.dataValid.email=true
              return true
            }

          },

          checkPasswordValid(){
              if(this.data.password.length <= 8 || !this.data.password){
                this.dataValid.password=false
                return false
              }else{
                this.dataValid.password=true
                return true
              }
          },
          checkPasswordConfirm(){

            if(this.data.password != this.data.passwordConfirm){
                this.dataValid.passwordConfirm=false
                return false
            }else{
                this.dataValid.passwordConfirm=true
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
