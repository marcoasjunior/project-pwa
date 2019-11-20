<template>
  <div class="home">
        <topBar></topBar>

    <div class="container-text-login">
      <h1>Cadastrar</h1>
      <p> Faça o cadastro com seu e-mail e senha</p>

      <!-- <span>{{ data }} </span> -->
    </div>


        <!-- <div id="preview" class="mt-5 box-img-perfil ac">
            <b-img v-show="url" :src="url" fluid class="img-perfil perfil-picture" />
        </div>

        <div class=" ac container-upload mt-3">

        <input class="upload ac" ref="fileInput" type="file" @change="onFileChange($event)" required capture
            accept="image/*,.pdf">


              <svg class="ac upload-icon" v-show="!this.data.file" aria-hidden="true" focusable="false" data-prefix="fad" data-icon="file-upload" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><g class="fa-group"><path fill="currentColor" d="M384 128H272a16 16 0 0 1-16-16V0H24A23.94 23.94 0 0 0 0 23.88V488a23.94 23.94 0 0 0 23.88 24H360a23.94 23.94 0 0 0 24-23.88V128zm-94.82 224H224v80a16 16 0 0 1-16 16h-32a16 16 0 0 1-16-16v-80H94.82c-14.28 0-21.41-17.29-11.27-27.36L180 229a17.06 17.06 0 0 1 24 0l96.43 95.65c10.15 10.07 3 27.35-11.25 27.35z" class="fa-secondary color-icon"></path><path fill="currentColor" d="M377 105L279.1 7a24 24 0 0 0-17-7H256v112a16 16 0 0 0 16 16h112v-6.1a23.9 23.9 0 0 0-7-16.9zM204 229a17.06 17.06 0 0 0-24 0l-96.45 95.64C73.41 334.71 80.54 352 94.82 352H160v80a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-80h65.18c14.25 0 21.4-17.29 11.25-27.36z" class="fa-primary"></path></g></svg>
             <b-button v-show="this.data.file" variant="info">trocar?</b-button>
             
        </div> -->

    <!-- <div class="upload-image-perfeil">
      <b-img v-show="url" :src="url" fluid />
    </div> -->


    <b-form-input class="mt-5 mb-3 input-bv ac" v-model="data.name" required placeholder="Nome" @keyup="callValidation()"></b-form-input>
    <div class="warningContainer mt-2" :class="'warning_'+ warningShow">

          <div v-if="warningName">
                
                <span class="triangle"> &#9650;</span>
                
                <div class="warning ac">
                 {{warningName}}
                 </div>

          </div>
                 
        </div>

      <b-form-input class="mt-5 mb-3 input-bv ac" v-model="data.email" required placeholder="e-mail" @keyup="callValidation()"></b-form-input>
        <div class="warningContainer mt-2" :class="'warning_'+ warningShow">
            
            <div v-if="warning">

                <span class="triangle"> &#9650;</span>

                <div class="warning ac">
                  {{warning}}
                </div>

            </div>
        </div>

      <b-form-input type="password" class="mt-5 mb-3 input-bv ac" v-model="data.password" required placeholder="Senha" @keyup="callValidation()"></b-form-input>
        <div class="warningContainer mt-2" :class="'warning_'+ warningShow">

          <div v-if="warningPassword">
                
                <span class="triangle"> &#9650;</span>
                
                <div class="warning ac">
                 {{warningPassword}}
                 </div>

          </div>
                 
        </div>

      <b-form-input type="password" class="mt-5 mb-3 input-bv ac" v-model="data.passwordConfirm" required placeholder="Confirmar senha" @keyup="callValidation()"></b-form-input>
        <div class="warningContainer mt-2" :class="'warning_'+ warningShow">
               
               <div v-if="warningPasswordConfirm">
                 <span class="triangle"> &#9650;</span>
               <div class="warning ac">
                  {{warningPasswordConfirm}}
                 </div>

               </div>
        </div>

    <br>
    <!-- {{error}} -->
    <br>

    <!-- <b-button v-b-tooltip.hover title="marco"> hover </b-button> -->
    <!-- {{dataValid}} -->

 

    <!-- <div class="wp-checkbox">
        <input type="checkbox" v-model="dataValid.chekBox" @click="getStatusCheckBox()"> Concordo com os termos e Condições
    </div> -->

        <div class="col-12 m0">
          <span @click="getInfoInputs()">
             <cButton :cData="{type:'submit', text:'Cadastrar',link:'UserImage',class:' ac wp-btn-3 bg-gdr-1'}" ></cButton>
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
          data:{email:'',password:'',passwordConfirm:'', file:''},
          formValid: false,
          dataValid:{email:false,password:false,passwordConfirm:false,chekBox:''},
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
        },
          
          
        sendData() {
            const dataToSend = new FormData()
            dataToSend.append('file', this.data.file)
            /* eslint-disable no-console */
            // console.log(formData)
            dataToSend.append('name', this.data.name)
            dataToSend.append('email', this.data.email)
            dataToSend.append('file', this.data.file)
            dataToSend.append('password', this.data.password)
            // dataToSend.append('UserId', sessionStorage.getItem('id'))
            this.putResponse = dataToSend

            const config = {
                header: {
                    'Content-Type': 'multipart/form-data'
                }
            }

            axios
                .post('http://localhost:3000/api/register/user', dataToSend, config)
                .then(response => this.putResponse = ( this.checkRegister(response) ))
                // .catch(e => {
                //     this.errors.push(e)
                // })

        },

          getInfoInputs(){
            axios.post('http://localhost:3000/api/register/user' ,this.data, {
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
            if(response.data){
              this.$router.push('/UserImage')
                sessionStorage.id = response.data.id;
            // eslint-disable-next-line no-console
            console.log(response)
              
            }else{
              alert("deu ruim ai mano")
            }
          },

          checkNameValid(){
            if(this.data.name.length < 5){
                this.warningName = "Nome inválido";
                return false
              }else{
                this.warningName = "";
                return true
              }
          },

          checkEmailValid(){


            var re = /^(([^<>()\\\\.,;:\s@"]+(\.[^<>()\\\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            let bah = re.test(this.data.email);
            // console.log('duhsdushdu' + bah)



            if(!bah){
              this.warning = "formatação errada, verifique novamente o email";
              this.warningShow = true;
              
              // console.log(this.warningShow)
              // console.log('Email está incorreto!')
              return true
            } 
            if(bah){
              this.warning = "";
            }

            if(bah.length < 10){
              this.warning = "Email is not valid";

            // eslint-disable-next-line no-console

              return false
       
            }else{
              return true
            }

          },

          checkPasswordValid(){
              if(this.data.password.length < 5 || !this.data.password){
                this.warningPassword = "Password too short";
                return false
              }else{
                this.warningPassword = "";
                return true
              }
          },
          checkPasswordConfirm(){

            if(this.data.password != this.data.passwordConfirm){
              this.warningPasswordConfirm = "password does not match";
                return false
            }else{
              this.warningPasswordConfirm = "";
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
