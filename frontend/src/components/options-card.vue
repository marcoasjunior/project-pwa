<template>
  <div>
    <div class="card shadow rounded">

      <!-- {{infoData}} -->
      <img :src='infoData.picture' class="rounded-circle" @click="showModal">
      <h3 id="emailHelp" class="form-text text-muted">{{infoData.name}}</h3>
      <small id="emailHelp" class="form-text text-muted">Deseja mudar os seus dados?</small>
      <div class="card-body">
        <form @submit="sendForm">
          <div class="form-group">

            <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input type="email" v-model="newData.email" :placeholder="infoData.email" required></b-input>
            </b-input-group>

          </div>
          <div class="form-group">
            
            <b-input-group prepend="Password" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input type="password" id="text-password" aria-describedby="password-help-block"
                v-model="newData.password"></b-input>
            </b-input-group>

            <b-form-text id="password-help-block">
              O password deve conter no mínimo 6 caracteres.
            </b-form-text>

          </div>
          <button type="submit" class="btn btn-primary">Alterar Dados</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import {
  axios
} from '../main'

export default {
  name: 'options-card',
  props: ['infoData'],
  data() {
    return {
      errors: [],
      putResponse: null,
      info: null,
      newData: {
        email: '',
        password: '',
        id: sessionStorage.getItem('id')
      }
    }
  },
  methods: {

    sendForm() {
      axios
        // .put('http://localhost:3000/api/update/user', this.newData)
        .put('https://weparty-app.herokuapp.com/api/update/user', this.newData)
        .then(response => this.putResponse = response)
        .catch(e => {
          this.errors.push(e)
        })
    
    this.newData ={
      email: '',
      password: ''
    }
    },

    showModal() {
      this.$emit('showModal')
    }
  },

  mounted() {

    // requisição inicial para pegar o usuario

    // axios
    //   .get(`http://localhost:3000/api/user/${sessionStorage.getItem('id')}`)
    //   .then(response => this.info = response.data)
    //   .catch(e => {
    //     this.errors.push(e)
    //   })

  }

}
</script>

<style scoped>

img {
  width: 80px;
  height: 80px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px


}




</style>